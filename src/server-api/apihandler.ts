/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_BASE_URL, API_CLIENT_ID, API_CLIENT_SECRET } from "@/utils/config";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { IBlogsAPIResponse } from "@/types/blogs";

async function pageAPIHandler(end_point: string) {
  const deviceCookie = (await cookies()).get("device")?.value || "";
  const token = (await cookies()).get("auth_token")?.value || null;
  console.log("token---token", token);
  console.log("deviceCookie---deviceCookie", deviceCookie);

  try {
    const response = await fetch(`${API_BASE_URL}${end_point}`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        clientid: API_CLIENT_ID,
        clientsecret: API_CLIENT_SECRET,
        device: deviceCookie,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        notFound();
      } else {
        const error_message = `firsts  API:${end_point}, Error: Failed to fetch data, status: ${response.status}`;
        console.error("server", error_message);
        throw new Error(error_message);
      }
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      return data;
    } else {
      const nonJsonResponse = await response.text();
      console.error("Non-JSON response:", nonJsonResponse);
      throw new Error("Received non-JSON response");
    }
  } catch (error) {
    console.error(
      `Second API: ${end_point}, Catch Block, Error fetching data: ${error}`
    );
    if (
      (error as any)?.digest === "NEXT_NOT_FOUND" ||
      (error as any)?.digest === "NEXT_HTTP_ERROR_FALLBACK;404"
    ) {
      notFound();
    }
  }
}

export const getAllBlogPageData = async (): Promise<IBlogsAPIResponse> => {
  const end_point = `/get-all-blogs`;
  return pageAPIHandler(end_point);
};
