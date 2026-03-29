#!/usr/bin/env node
// build-gallery.js
// Reads all photo entries from _data/gallery/*.md
// and writes a clean gallery.json the frontend consumes.

const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '_data', 'gallery');
const outputFile = path.join(__dirname, 'gallery.json');

if (!fs.existsSync(galleryDir)) {
  fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
  console.log('No gallery data found, wrote empty gallery.json');
  process.exit(0);
}

const files = fs.readdirSync(galleryDir).filter(f => f.endsWith('.md'));

const photos = [];

files.forEach(file => {
  const raw = fs.readFileSync(path.join(galleryDir, file), 'utf8');

  // Parse YAML front matter
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return;

  const fm = {};
  match[1].split('\n').forEach(line => {
    const [key, ...rest] = line.split(':');
    if (key && rest.length) {
      fm[key.trim()] = rest.join(':').trim().replace(/^["']|["']$/g, '');
    }
  });

  if (fm.image) {
    photos.push({
      title: fm.title || '',
      image: fm.image,
      featured: fm.featured === 'true',
      category: fm.category || '',
      date: fm.date || '',
    });
  }
});

// Sort: featured first, then by date descending
photos.sort((a, b) => {
  if (a.featured && !b.featured) return -1;
  if (!a.featured && b.featured) return 1;
  return (b.date || '').localeCompare(a.date || '');
});

fs.writeFileSync(outputFile, JSON.stringify(photos, null, 2));
console.log(`Built gallery.json with ${photos.length} photos.`);
