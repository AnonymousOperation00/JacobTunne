// app/api/tracks/route.js

export async function GET(req) {

  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");

  const CLIENT_ID = "OtK8FaCIITOnTBrgmv05bTkLTrcKKcuc";

  const url =
    `https://api-v2.soundcloud.com/search/tracks` +
    `?q=${encodeURIComponent(q)}` +
    `&client_id=${CLIENT_ID}` +
    `&limit=18`;

  const res = await fetch(url);
  const data = await res.json();

  return Response.json(data, {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });
}
