const admin = require('firebase-admin');

// firebase service account pk
const type = "service_account";
const project_id = "badbank-4f505";
const private_key_id = "52fbcab02d80699d59d816f3692766c2aa6e15ad";
const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCJVHpPtW/gYYOc\nx0uT2NHw65HvsgFP2YEw/cpwCRQEK1xx7i+dSTie3WTKnMr0arUQ8k0EUS/ilBzB\nsV89YAsbboUo37rwekKi3DC6ro4hfPwlZyI/NVa43rkpn4FPy7QCAvRYmEDNjCsS\nm0AMA48PsiN7EbPSuxhqwUDSgVk0PTStcKFSwaFlN8uBtGS9AKyQA5DRorLVdJuA\npte5RNT37DA5eabCSHowRk9nnt+6p7QpRBvMgdTb2flajB4DQLFTJ4oJ0V8gDWpa\nUjA4Ruemskn7nocnPfuQQy4IcQKPwTjZ7p90SbTVKstQDQ724XH0fWC7+O9dNA6+\nziHCQE55AgMBAAECggEAFTycctnFT0GahL1yZo6lCJ36l21DiVbtWjzPoruvU2W7\n310iEoSm3jUGcn6vXqoRuL5/l9H7lwz91XDZyuKgqmv7k506321IrhQMRRIxUI8a\nFFP6lnkSdsxFKLajMfUiWnKdLrDSH0yJwfrYJgN24B/VdMwBWZktPB+z0oRw3a76\nBha98xoBJBC2V4psaW51eLOGOZD6fajS4qa6v3YznXnyMxqNXeRooMKiqj1Zoobv\ne/3+O+Q30UemvFB+o5J1fkY7q0Z8qO490HMgQWT7yUzM6di9e23/wrs/CqMNkPSR\njgjQ29+PUPoqARE8Ct00is10RzP0yPkx6DEISP5rMQKBgQC/3yE0U1wgsaeSM3gh\n+LjEsU3w4aQBx+J4dvAYOGhpQG/N2fbb9jmUp+qq9U6o/i0vryJTvLflVBXkb9uf\nYvzcvvkgMD3bqa5Q6F4/DMDVrn6orH/NfpzFO/vB/XX6Fz14zXTXDZQKBuyXTDiL\nsctmpqyTSGMskFGBrkRFrNlAIwKBgQC3OqwlLfFvpA67TZwdWiaXKSZ6qPv+69/s\nY5B8dXyops8CSrYkVyT+hvZH31WbEke+s+w95K8iSBdFNuR9LRYIXByDnEq7sEt2\nTLaGqVHwEE00WwA6ciYiEbgafYGcwzrWYUnzqY2tFRFeERXkECTG964AOVjEZLsS\nq8MAkzISswKBgEB5M+knUb/SsqJYFTglIcFGaxBUYg4PIrSkEs2wtrUXZ/peEauc\nM4EWY66Ku6Hht0FcskY9FfZDqQ+X3s7SLnHm4kPEsiSMAf1B99lr6ahj+D+pp1Bg\nCUHlhBWNnAUrpgZf07En6OTtqra0cBPQ7K5Tt43ONzUUUa8n5d0b1ezNAoGAQrBD\nKYEQR+7xQbDcqj4+n3Plwm0w0ratGI+gbfwg9A1KeO4SXyWsnEso5j3eHYPIwxsf\nV+Oc7qBIf/ObtAet5jsIUcqX1Lo0rQj8wgRsgzCbuPuKGLulL289j76wZwsTpiVg\n0iObIizx1kfnrMtHZ3eMSB6XNVvoTsJfRh1M80sCgYBSVYsxuMBefByUmV9Kv8dU\nwgd0kc713VrBZoVQ1sTK92GHLO2Qym2koQNLOpPqSZTs0mk1tyEL++VK+eGD1RJ2\n2or3/7+LkAN9pvibGYCU4BzxwyO0w93g5AbapPf3I0SYI4/FtjTYDHdL0aXMReXp\nonOEIxjNbWNqzrMhqTIClA==\n-----END PRIVATE KEY-----\n";
const client_email = "firebase-adminsdk-3mgr0@badbank-4f505.iam.gserviceaccount.com";
const client_id = "102751829445258585568";
const auth_uri = "https://accounts.google.com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3mgr0%40badbank-4f505.iam.gserviceaccount.com";
const universe_domain = "googleapis.com";

// credential grants access to Firebase services
admin.initializeApp({
  credential: admin.credential.cert({
      type,
      project_id,
      private_key_id,
      private_key:
        private_key.replace(/\\n/g,'\n'),
      client_email,
      client_id,
      auth_uri,
      token_uri,
      auth_provider_x509_cert_url,
      client_x509_cert_url
  }),
});

module.exports = admin;