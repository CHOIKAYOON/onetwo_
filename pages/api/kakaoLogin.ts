import cookie from 'cookie';
import { fetchJson } from "lib/api";

const handler = async (req: any, res: any) => {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }
  const { accessToken } = req.body;
  
  try {
    const expires = new Date()
    expires.setDate(Date.now() + 1);

    const { result } = await fetchJson(`http://ec2-54-180-30-10.ap-northeast-2.compute.amazonaws.com:5510/api/v1/users/kakao-login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      body: JSON.stringify({ accessToken }),
    });
    res.status(200)
    .setHeader('Set-Cookie', cookie.serialize('jwt', result.token, {
      path: '/api',
      httpOnly: true,
      expires,
    }))
    .setHeader('Set-Cookie', cookie.serialize('idAuth', result.user.id))
    return res.json({
      id: result.user.id,
      name: result.user.nickname,
      expires,
    })
  } catch (err) {
    res.status(401).end();
  }
}

export default handler;