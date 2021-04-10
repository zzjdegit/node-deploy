// config.js
/*
说明：
  请确保解压后的文件目录为dist
  ssh: 连接服务器用户信息
  targetDir: 需要压缩的文件目录（需开启压缩）
  targetFile: 指定上传文件名称（该文件同级目录）
  openCompress: 关闭后，将跳过目标目录压缩步骤，直接上传指定文件
  openBackUp: 开启后，若远端存在相同目录，则会修改原始目录名称，不会直接覆盖
  deployDir: 指定远端部署地址
  releaseDir: 指定远端部署地址下的发布目录名称
*/

const config = {
  ssh: {
    host: 'zzjdedn.top', // 自己服务器的主机IP或者域名
    port: '22', // ssh默认端口
    username: 'root', // 自己服务器的用户名
    password: 'xxx' // 自己服务器的密码
  },
  targetDir: '../vue3-demo/dist', // 目标压缩目录(可使用相对地址)
  targetFile: 'dist.zip', // 目标文件
  openCompress: true, // 是否开启压缩
  openBackUp: false, // 是否开启远端备份
  deployDir: '/home/', // 远端目录
  releaseDir: 'www' // 发布目录
}

module.exports = config
