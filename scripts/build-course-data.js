import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const tracksDir = path.join(projectRoot, 'tracks');
const outputDir = path.join(projectRoot, 'src', 'data');
const publicTracksDir = path.join(projectRoot, 'public', 'tracks');
const publicDocsDir = path.join(projectRoot, 'public', 'docs');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Copy media assets (images, gifs, mp4s) to public directory so Vite & production build can serve them directly
function copyMediaAssets(srcDir, targetDir) {
  if (!fs.existsSync(srcDir)) return;
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  const mediaExts = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.mp4', '.webm', '.svg'];

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(targetDir, entry.name);

    if (entry.isDirectory()) {
      copyMediaAssets(srcPath, destPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (mediaExts.includes(ext)) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}

// Sync media files to public folder
copyMediaAssets(tracksDir, publicTracksDir);
if (fs.existsSync(path.join(projectRoot, 'docs'))) {
  copyMediaAssets(path.join(projectRoot, 'docs'), publicDocsDir);
}

// Category mapping based on track names/topics
function getCategory(num) {
  if ([1, 2, 3, 4].includes(num)) return 'Video & UGC';
  if ([5, 6].includes(num)) return 'Avatars & Voice';
  if ([7, 8, 9, 10, 11].includes(num)) return 'Visual & E-Commerce';
  if ([12, 13, 14, 15].includes(num)) return 'Business, Tools & Agents';
  return 'General';
}

function cleanMarkdownTitle(raw) {
  if (!raw) return '';
  return raw.replace(/^#+\s*/, '').replace(/\s*✅|\s*🚧|\s*⬜/g, '').trim();
}

function parseMarkdownHeaders(content) {
  const headers = [];
  const lines = content.split('\n');
  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      headers.push({ level, text, id });
    }
  }
  return headers;
}

const trackFolders = fs.readdirSync(tracksDir, { withFileTypes: true })
  .filter(i => i.isDirectory())
  .sort((a, b) => {
    const numA = parseInt(a.name.split('-')[0], 10);
    const numB = parseInt(b.name.split('-')[0], 10);
    return numA - numB;
  });

let allModulesCount = 0;
let allTemplatesCount = 0;
const allTemplatesList = [];

const tracksData = trackFolders.map(dir => {
  const trackId = dir.name;
  const trackPath = path.join(tracksDir, trackId);
  const trackNum = parseInt(trackId.split('-')[0], 10);
  const files = fs.readdirSync(trackPath);

  let trackReadme = '';
  if (files.includes('README.md')) {
    trackReadme = fs.readFileSync(path.join(trackPath, 'README.md'), 'utf8');
  }

  const rawTitle = trackReadme.match(/^#\s+(.+)$/m)?.[1] || trackId.replace(/^\d+-/, '').replace(/-/g, ' ');
  const title = cleanMarkdownTitle(rawTitle);

  let description = '';
  const descMatch = trackReadme.match(/>\s*(.+)/);
  if (descMatch) {
    description = descMatch[1].trim();
  } else {
    description = `Master ${title} with practical step-by-step workflows, tools comparison, and monetization strategies.`;
  }

  // Parse apps.json if available
  let appsMap = {};
  const appsJsonPath = path.join(trackPath, 'apps.json');
  if (fs.existsSync(appsJsonPath)) {
    try {
      appsMap = JSON.parse(fs.readFileSync(appsJsonPath, 'utf8'));
    } catch (e) {
      console.warn(`Error reading apps.json in ${trackId}:`, e.message);
    }
  }

  // Find module files (ignoring .id.md files when listing primary markdown files)
  const moduleFiles = files
    .filter(f => f.endsWith('.md') && !f.endsWith('.id.md') && f !== 'README.md' && /^\d+/.test(f))
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

  const modules = moduleFiles.map(mf => {
    const content = fs.readFileSync(path.join(trackPath, mf), 'utf8');
    
    // Check if translated .id.md version exists
    const idFileName = mf.replace('.md', '.id.md');
    let contentId = content;
    if (files.includes(idFileName)) {
      contentId = fs.readFileSync(path.join(trackPath, idFileName), 'utf8');
    }

    const titleMatch = content.match(/^#\s+(.+)$/m);
    const timeMatch = content.match(/\*\*Time:\*\*\s*(.+)/i) || content.match(/\*\*Waktu Belajar:\*\*\s*(.+)/i) || content.match(/\*\*Waktu:\*\*\s*(.+)/i);
    const prereqMatch = content.match(/\*\*Prerequisites:\*\*\s*(.+)/i) || content.match(/\*\*Prasyarat:\*\*\s*(.+)/i);
    
    const moduleId = mf.replace('.md', '');
    const moduleNum = parseInt(mf.split('-')[0], 10);
    const modTitle = titleMatch ? titleMatch[1].trim() : mf;
    const time = timeMatch ? timeMatch[1].trim() : '~20 minutes';
    const prerequisites = prereqMatch ? prereqMatch[1].trim() : 'None';
    
    const headers = parseMarkdownHeaders(content);
    const appInfo = appsMap[moduleId] || null;

    allModulesCount++;

    return {
      id: `${trackId}/${moduleId}`,
      trackId,
      trackNum,
      trackTitle: title,
      moduleId,
      num: moduleNum,
      title: modTitle,
      time,
      prerequisites,
      headers,
      appInfo,
      content,      // English content
      content_id: contentId // Indonesian content
    };
  });

  // Find template files
  let templates = [];
  const templatesDir = path.join(trackPath, 'templates');
  if (fs.existsSync(templatesDir)) {
    const tDirFiles = fs.readdirSync(templatesDir);
    const tFiles = tDirFiles.filter(f => f.endsWith('.md') && !f.endsWith('.id.md'));
    
    templates = tFiles.map(tf => {
      const tContent = fs.readFileSync(path.join(templatesDir, tf), 'utf8');
      const idTFileName = tf.replace('.md', '.id.md');
      let tContentId = tContent;
      if (tDirFiles.includes(idTFileName)) {
        tContentId = fs.readFileSync(path.join(templatesDir, idTFileName), 'utf8');
      }

      const tMatch = tContent.match(/^#\s+(.+)$/m);
      const tId = tf.replace('.md', '');
      const tTitle = tMatch ? tMatch[1].trim() : tId.replace(/-/g, ' ');
      
      const templateObj = {
        id: `${trackId}/templates/${tId}`,
        trackId,
        trackNum,
        trackTitle: title,
        filename: tf,
        title: tTitle,
        content: tContent,
        content_id: tContentId
      };

      allTemplatesList.push(templateObj);
      allTemplatesCount++;
      return templateObj;
    });
  }

  return {
    id: trackId,
    num: trackNum,
    title,
    category: getCategory(trackNum),
    description,
    readme: trackReadme,
    modulesCount: modules.length,
    templatesCount: templates.length,
    modules,
    templates
  };
});

// Read general course README and ROADMAP
let mainReadme = '';
let mainRoadmap = '';
if (fs.existsSync(path.join(projectRoot, 'README.md'))) {
  mainReadme = fs.readFileSync(path.join(projectRoot, 'README.md'), 'utf8');
}
if (fs.existsSync(path.join(projectRoot, 'ROADMAP.md'))) {
  mainRoadmap = fs.readFileSync(path.join(projectRoot, 'ROADMAP.md'), 'utf8');
}

const fileContent = `// Auto-generated by scripts/build-course-data.js
export const courseInfo = {
  title: "Kampus Kreator AI",
  subtitle: "Kurikulum gratis & open-source untuk menghasilkan uang dari AI gambar, video, dan audio — untuk kreator dan agensi.",
  totalTracks: ${tracksData.length},
  totalModules: ${allModulesCount},
  totalTemplates: ${allTemplatesCount},
  mainReadme: ${JSON.stringify(mainReadme)},
  mainRoadmap: ${JSON.stringify(mainRoadmap)}
};

export const tracksData = ${JSON.stringify(tracksData, null, 2)};

export const allTemplatesData = ${JSON.stringify(allTemplatesList, null, 2)};
`;

fs.writeFileSync(path.join(outputDir, 'courseData.js'), fileContent, 'utf8');
console.log(`[OK] Successfully compiled ${tracksData.length} tracks, ${allModulesCount} modules, ${allTemplatesCount} templates & synced media assets into public/!`);
