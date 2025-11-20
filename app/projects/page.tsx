"use client";

import { useEffect, useState } from "react";
import { projects } from "@/components/common/dummy";
import Link from "next/link";

export default function ProjectTablePage() {
  const [visibleRows, setVisibleRows] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const rows = document.querySelectorAll(".proj-row");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleRows((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    rows.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="p-2 md:p-10 max-w-7xl mx-auto">
      {/* 🔙 BACK BUTTON */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-orange-600 hover:text-orange-700"
      >
        <span className="text-xl">←</span> Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-8 text-left">All Projects.</h1>

      <div className="overflow-x-auto rounded-sm border shadow-md">
        <table className="min-w-full border-collapse bg-background">
          <thead className="bg-orange-500 text-white text-sm">
            <tr>
              <th className="p-4 text-left border">No.</th>
              <th className="p-4 text-left border">Title</th>
              <th className="p-4 text-left border w-[600px] md:w-auto">
                Description
              </th>
              <th className="p-4 text-left border w-[250px] md:w-auto">Tags</th>
              <th className="p-4 text-left border w-[150px] md:w-auto">
                Made At
              </th>
              <th className="p-4 text-left border w-[150px] md:w-auto">
                Duration
              </th>
              <th className="p-4 text-left border">Links</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((proj, idx) => {
              const isVisible = visibleRows[idx];

              return (
                <tr
                  key={idx}
                  data-index={idx}
                  className={`proj-row border-b transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  {/* No. */}
                  <td className="p-4 border font-semibold text-center">
                    {idx + 1}
                  </td>

                  {/* Title */}
                  <td className="p-4 border font-medium">{proj.title}</td>

                  {/* Description */}
                  <td className="p-4 border text-sm text-gray-700">
                    {proj.description}
                  </td>

                  {/* Tags */}
                  <td className="p-4 border">
                    <div className="flex gap-2 flex-wrap">
                      {(proj.tags || []).map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-orange-500/20 text-orange-600 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Made At */}
                  <td className="p-4 border text-sm">{proj.madeAt || "-"}</td>

                  {/* Duration */}
                  <td className="p-4 border text-sm">{proj.duration || "-"}</td>

                  {/* Links */}
                  <td className="p-4 flex gap-3 text-sm">
                    {proj.liveUrl ? (
                      <Link
                        href={proj.liveUrl}
                        target="_blank"
                        className="text-blue-600 hover:underline"
                      >
                        Live
                      </Link>
                    ) : (
                      <span className="text-gray-400 text-xs">No Live</span>
                    )}

                    {proj.githubUrl ? (
                      <Link
                        href={proj.githubUrl}
                        target="_blank"
                        className="text-green-600 hover:underline"
                      >
                        GitHub
                      </Link>
                    ) : (
                      <span className="text-gray-400 text-xs">No Repo</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
