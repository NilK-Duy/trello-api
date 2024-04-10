// Những domain được phép truy cập tới tài nguyên chính của Server
export const WHITELIST_DOMAINS = [
  // 'http://localhost:5173' // vì ở file config/cors đã luôn luôn cho phép môi trường dev
  // ... deploy lên domain chính thức
  'https://trello-web-eight-nu.vercel.app',
  'https://ngkhanhduy.id.vn'
]

export const BOARD_TYPES = {
  PUBLIC: 'public',
  PRIVATE: 'private'
}
