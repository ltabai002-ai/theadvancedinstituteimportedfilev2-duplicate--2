import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface TestimonialPayload {
  studentName: string;
  examName: string;
  successStory: string;
  rankingOrScore: string;
  imageUrl?: string;
  isFeatured?: boolean;
  displayOrder?: number;
}

interface TestimonialUpdate extends TestimonialPayload {
  id: string;
  isActive?: boolean;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Missing Supabase configuration");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const url = new URL(req.url);
    const pathname = url.pathname;

    if (pathname === "/functions/v1/testimonials" && req.method === "GET") {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });

      if (error) throw error;

      return new Response(JSON.stringify(data), {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      });
    }

    if (
      pathname === "/functions/v1/testimonials/featured" &&
      req.method === "GET"
    ) {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("is_active", true)
        .eq("is_featured", true)
        .order("display_order", { ascending: true });

      if (error) throw error;

      return new Response(JSON.stringify(data), {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      });
    }

    if (pathname === "/functions/v1/testimonials" && req.method === "POST") {
      const authHeader = req.headers.get("Authorization");
      if (!authHeader) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        });
      }

      const payload: TestimonialPayload = await req.json();

      const { data, error } = await supabase
        .from("testimonials")
        .insert({
          student_name: payload.studentName,
          exam_name: payload.examName,
          success_story: payload.successStory,
          ranking_or_score: payload.rankingOrScore,
          image_url: payload.imageUrl || null,
          is_featured: payload.isFeatured || false,
          display_order: payload.displayOrder || 0,
        })
        .select();

      if (error) throw error;

      return new Response(JSON.stringify(data[0]), {
        status: 201,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      });
    }

    if (
      pathname.match(/^\/functions\/v1\/testimonials\/[a-f0-9-]+$/) &&
      req.method === "PUT"
    ) {
      const authHeader = req.headers.get("Authorization");
      if (!authHeader) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        });
      }

      const id = pathname.split("/").pop();
      const payload: TestimonialUpdate = await req.json();

      const updateData: Record<string, unknown> = {
        student_name: payload.studentName,
        exam_name: payload.examName,
        success_story: payload.successStory,
        ranking_or_score: payload.rankingOrScore,
        image_url: payload.imageUrl || null,
        is_featured: payload.isFeatured || false,
        display_order: payload.displayOrder || 0,
        updated_at: new Date().toISOString(),
      };

      if (payload.isActive !== undefined) {
        updateData.is_active = payload.isActive;
      }

      const { data, error } = await supabase
        .from("testimonials")
        .update(updateData)
        .eq("id", id)
        .select();

      if (error) throw error;

      return new Response(JSON.stringify(data[0]), {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      });
    }

    if (
      pathname.match(/^\/functions\/v1\/testimonials\/[a-f0-9-]+$/) &&
      req.method === "DELETE"
    ) {
      const authHeader = req.headers.get("Authorization");
      if (!authHeader) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        });
      }

      const id = pathname.split("/").pop();

      const { error } = await supabase
        .from("testimonials")
        .update({ is_active: false })
        .eq("id", id);

      if (error) throw error;

      return new Response(JSON.stringify({ success: true }), {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
