"use client";

import { useState } from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type Project } from "@/data/projects";

// Statically imported so Next.js/webpack resolves and verifies these files at
// BUILD TIME. If a file is missing or misnamed, the build fails immediately
// with a clear error instead of silently rendering a broken image at runtime.
import bolImage from "@/public/images/projects/bol.webp";
import portfolioImage from "@/public/images/projects/portfolio.webp";
import revalueImage from "@/public/images/projects/revalue.webp";
import collegeLensImage from "@/public/images/projects/college-lens.webp";

const staticProjectImages: Record<string, StaticImageData> = {
  bol: bolImage,
  "portfolio-website": portfolioImage,
  revalue: revalueImage,
  "college-lens": collegeLensImage,
};

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  // Prefer the verified static import; fall back to the string path from
  // data/projects.ts for any project not in the map above.
  const imageSrc = staticProjectImages[project.id] ?? project.image;
  const showImage = Boolean(project.image) && !imageFailed;

  return (
    <Card className="flex h-full flex-col overflow-hidden border-2 pt-0 transition-all hover:border-primary">
      {project.image && (
        <div className="group relative aspect-video w-full overflow-hidden bg-muted">
          {showImage && (
            <Image
              src={imageSrc}
              alt={project.title}
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading={priority ? undefined : "lazy"}
              priority={priority}
              onError={() => setImageFailed(true)}
            />
          )}
          {/* Subtle dark overlay so badges/text stay readable, while preserving the image's own colors */}
          {showImage && <div className="absolute inset-0 bg-black/25" />}
          {project.badge && (
            <Badge className="absolute top-3 right-3 border-0 bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
              {project.badge}
            </Badge>
          )}
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>{project.title}</CardTitle>
          {project.status && (
            <span className="shrink-0 text-xs font-medium text-muted-foreground">
              {project.status}
            </span>
          )}
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline">+{project.technologies.length - 4}</Badge>
          )}
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {project.achievements.slice(0, 2).map((achievement, i) => (
            <li key={i} className="flex items-start">
              <ArrowRight className="mt-0.5 mr-2 h-4 w-4 shrink-0 text-primary" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild variant="default" size="sm">
          <Link href={`/projects/${project.id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <div className="flex-1"></div>
        {project.comingSoon ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              disabled
              aria-label="GitHub (coming soon)"
              className="cursor-not-allowed opacity-40"
            >
              <Github className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              disabled
              aria-label="Live Demo (coming soon)"
              className="cursor-not-allowed opacity-40"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </>
        ) : (
          <>
            {project.github && (
              <Button asChild variant="ghost" size="icon">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild variant="ghost" size="icon">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </>
        )}
      </CardFooter>
    </Card>
  );
}
