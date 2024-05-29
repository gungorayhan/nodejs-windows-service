const Service = require('node-windows').Service;
const path = require('path');
// Servis yapılandırması
const svc = new Service({
  name: 'MyNodeService',
  description: 'Node.js ile oluşturulmuş basit bir Windows servisi.',
  script: require('path').join(__dirname, 'app.js')
});

// Servis kurulum olayları
svc.on('install', () => {
  svc.start();
});

svc.on('uninstall', () => {
  console.log('Servis kaldırıldı.');
});

svc.on('alreadyinstalled', () => {
  console.log('Servis zaten kurulu.');
});

svc.on('start', () => {
  console.log('Servis başlatıldı.');
});

svc.on('stop', () => {
  console.log('Servis durduruldu.');
});

// Servisi kur
svc.install();

// svc.uninstall();