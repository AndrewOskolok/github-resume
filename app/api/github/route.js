import axios from "axios";

export async function POST(request) {
  try {
    const body = await request.json();

    const response = await axios.post(
      "https://quill-media.api.vibero.tech/api/lead",
      {
        ...body
      }
    );

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
