import { Valka } from "../dist/valka"
import path from "path"

const start = async () => {
  await initValka()
  console.log('启动成功')
}

const initValka = async () => {
  const port = parseInt(process.env.PORT as string, 10) || 8888
  const app = await Valka({
    port,
    baseDir: path.resolve(__dirname, "src"),
    enableAuth: true,
    jwtCookie: "token",
    jwtHeader: "jwt-token",
    jwtSecret: "default",
  })
  return app
}

start()