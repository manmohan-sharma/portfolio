'use client';

import * as React from "react";
import Image from "next/image";

import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import HubIcon from "@mui/icons-material/Hub";
import VerifiedIcon from "@mui/icons-material/Verified";
import SmartToyIcon from "@mui/icons-material/SmartToy";

// Impact icons
import StorefrontIcon from "@mui/icons-material/Storefront";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";

// How I Help (PMP pillars) icons
import GroupsIcon from "@mui/icons-material/Groups";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PublicIcon from "@mui/icons-material/Public";

/* =======================
   Global styling knobs
======================= */

const FRAME_RADIUS = 0; // rectangular frames
const CARD_RADIUS = 0;  // rectangular cards

// Card typography system (cohesive sizing)
const CARD_TITLE_FS = "0.95rem";
const CARD_SUBTITLE_FS = "0.85rem";
const FLIP_TITLE_FS = "0.90rem";
const FLIP_TEXT_VARIANT: "caption" | "body2" = "caption";

/* =======================
   Content (easy to edit)
======================= */

const PROFILE = {
  name: "Manmohan Sharma",
  tagline: "Turning ambiguity into scalable, reliable delivery.",
  valueChips: [
    "Technology Architecture Manager",
    "Technical Program Manager",
    "Quality, Performance and Reliability Advocate",
  ],

  introOptions: [
    [
      "I work at the intersection of complexity and accountability - where large systems, multiple teams, and high-stakes outcomes converge.",
      "I’ve led programs where success depended not just on building the right systems, but on creating shared clarity across engineering, architecture, and business leaders - early, measurably, and at scale.",
      "My focus is on turning ambiguity into decision-ready execution: designing for reliability upfront, establishing signals leaders can trust, and enabling teams to move with confidence rather than urgency as systems grow and change.",
    ],
    [
      "I lead complex technology programs where scale, reliability, and delivery confidence are non-negotiable.",
      "Across 15+ years in finance, public sector, and telecom platforms, I’ve helped organizations move from fragmented execution to decision-ready delivery by aligning teams around clear signals, measurable readiness, and shared ownership.",
      "My work centers on designing systems and programs that scale responsibly - where reliability is built early, tradeoffs are explicit, and teams deliver with predictability as complexity increases.",
    ],
    [
      "The most interesting problems are rarely technical in isolation - they emerge where systems grow large, teams multiply, and decisions become harder to make with confidence.",
      "Over decade, I’ve worked in these environments to help leaders and teams create clarity early: aligning architecture, delivery, and quality signals so execution remains predictable as scale increases.",
      "I focus on building programs and platforms that can be trusted - not just to work, but to scale, adapt, and support informed decision-making under pressure.",
    ],
  ],
};

const LINKS = {
  email: "mailto:sharma11031988@gmail.com",
  linkedin: "https://www.linkedin.com/in/sharma1188/",
  github: "https://github.com",
  resumePdf: "/Manmohan_Sharma_Resume.pdf",
};

const CERTIFICATIONS = [
  { title: "Google Project Management", org: "Google", year: "2025", href: "https://www.coursera.org/account/accomplishments/specialization/YT99CY9NHY7V" },
  { title: "Azure AI Fundamentals", org: "Microsoft", year: "2023", href: "https://learn.microsoft.com/en-us/users/sharmamanmohan-3459/credentials/6955cd2b22d244a8?ref=https%3A%2F%2Fwww.linkedin.com%2F" },
  { title: "Technology Architect", org: "Accenture", year: "2022", href: "https://drive.google.com/file/d/1_r56MOTXmlT0dlmLvJno6fByUcWWFLYq/view" },
  { title: "Azure Data Engineer Associate", org: "Microsoft", year: "2021", href: "https://drive.google.com/file/d/1iu_5N7nv7_8YtmCZUVPuhw7pZvwZjzNW/view" },
  { title: "Azure Fundamentals", org: "Microsoft", year: "2021", href: "https://drive.google.com/file/d/1qDDzCGZkr1z9_5w1ie5LHSMVBuMexrgx/view" },
  { title: "Business Analysis (CBAP)", org: "IIBA", year: "2019", href: "https://drive.google.com/file/d/10lHTAJ3c6iohzzgMw_OynxGFvP3SFAeg/view" },
  { title: "AWS SAA", org: "Amazon Web Services", year: "2019", href: "https://drive.google.com/file/d/1odX3aaGgIg-wpdaN91i418560BgSWetq/view" },
];

const IMPACT = [
  {
    title: "Retail : S/4HANA Cloud Migration and Modernization",
    icon: <StorefrontIcon color="primary" />,
    oneLiner:
      "Established a readiness-driven delivery model that reduced release risk and accelerated executive decision-making.",
    story: [
      "Defined an enterprise-wide performance and readiness framework for a legacy → SAP S/4HANA Cloud migration, standardizing validation across critical flows, integrations, and test phases to create a single definition of “ready.”",
      "Enabled faster go/no-go decisions with dashboards, KPIs, and readiness gates—aligning 30+ stakeholders through governance and risk reviews.",
    ],
  },
  {
    title: "Finance : Government Healthcare for 9M Customers",
    icon: <HealthAndSafetyIcon color="primary" />,
    oneLiner:
      "Delivered predictable multi-release execution for a national platform serving ~9M users across 24+ systems.",
    story: [
      "Led performance, scalability, reliability, and observability across 24+ on-prem and AWS stacks, tying NFRs to business outcomes as delivery signals.",
      "Established 10+ leadership KPIs and mitigated 20+ critical risks to support data-driven go-live decisions at scale.",
    ],
  },
  {
    title: "Telecom : Application and Data Modernization",
    icon: <CloudQueueIcon color="primary" />,
    oneLiner:
      "Improved performance by ~80% and reduced annual infrastructure cost by ~$400K through disciplined QE and architecture alignment.",
    story: [
      "Led QE strategy and release risk management across 8 releases for an Azure Big Data & Analytics migration, addressing accuracy, latency, and scalability.",
      "Removed bottlenecks with architecture + engineering—delivering ~$400K annual savings, ~80% improvement, and ~40% sprint velocity lift.",
    ],
  },
];

/* =======================
   Chakra Accent (7 stripes)
======================= */

const CHAKRA_STRIPES = [
  { name: "Crown", color: "rgba(147, 112, 219, 0.70)" },
  { name: "Third Eye", color: "rgba( 75,   0, 130, 0.55)" },
  { name: "Throat", color: "rgba( 30, 144, 255, 0.55)" },
  { name: "Heart", color: "rgba( 46, 204, 113, 0.55)" },
  { name: "Solar Plexus", color: "rgba(241, 196,  15, 0.55)" },
  { name: "Sacral", color: "rgba(230, 126,  34, 0.55)" },
  { name: "Root", color: "rgba(231,  76,  60, 0.50)" },
];

/* =======================
   Hooks / Helpers
======================= */

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);
    onChange();
    media.addEventListener?.("change", onChange);
    return () => media.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

/* =======================
   Reveal on Scroll
======================= */

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [show, setShow] = React.useState(false);
  const reducedMotion = usePrefersReducedMotion();

  React.useEffect(() => {
    if (reducedMotion) {
      setShow(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShow(true);
    }, { threshold: 0.12 });

    obs.observe(el);
    return () => obs.disconnect();
  }, [reducedMotion]);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(14px)",
        transition: reducedMotion ? "none" : "opacity 700ms ease, transform 700ms ease",
      }}
    >
      {children}
    </Box>
  );
}

/* =======================
   Chakra Bars
======================= */

function ChakraTopBar({ height = 8 }: { height?: number }) {
  return (
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height,
        display: "flex",
        overflow: "hidden",
        opacity: 0.95,
        pointerEvents: "none",
      }}
    >
      {CHAKRA_STRIPES.map((s) => (
        <Box key={s.name} sx={{ flex: 1, backgroundColor: s.color }} />
      ))}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0.10), rgba(0,0,0,0))",
        }}
      />
    </Box>
  );
}

/* =======================
   Shared Components
======================= */

function BulletList({
  items,
  textVariant = "body2",
  compact = false,
}: {
  items: string[];
  textVariant?: "body2" | "caption";
  compact?: boolean;
}) {
  return (
    <List dense disablePadding>
      {items.map((t) => (
        <ListItem key={t} disableGutters sx={{ py: compact ? 0.05 : 0.25 }}>
          <ListItemIcon sx={{ minWidth: compact ? 20 : 28 }}>
            <CheckCircleOutlineIcon fontSize="small" color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={t}
            primaryTypographyProps={{
              variant: textVariant,
              color: "text.secondary",
              sx: { lineHeight: compact ? 1.35 : 1.5 },
            }}
          />
        </ListItem>
      ))}
    </List>
  );
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <Box id={id} sx={{ scrollMarginTop: 32, mb: 3 }}>
      <Paper
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: FRAME_RADIUS,
          p: { xs: 2.5, md: 3 },
          pl: { xs: 3.75, md: 4.25 },
        }}
      >
        {/* Left chakra accent */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: { xs: 10, md: 12 },
            display: "flex",
            flexDirection: "column",
            opacity: 0.9,
          }}
        >
          {CHAKRA_STRIPES.map((s) => (
            <Box key={s.name} sx={{ flex: 1, backgroundColor: s.color }} />
          ))}
        </Box>

        {/* Soft fade beside stripe */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: { xs: 22, md: 26 },
            background: "linear-gradient(90deg, rgba(0,0,0,0.06), rgba(0,0,0,0))",
            pointerEvents: "none",
          }}
        />

        <Typography variant="h5" sx={{ fontWeight: 900 }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
            {subtitle}
          </Typography>
        )}
        <Divider sx={{ my: 2 }} />
        {children}
      </Paper>
    </Box>
  );
}

/* =======================
   Flip Card – Capabilities/How I Help (reusable)
======================= */

function FlipInfoCard({
  title,
  subtitle,
  points,
  icon,
  height = 180,
}: {
  title: string;
  subtitle?: string;
  points: string[];
  icon: React.ReactNode;
  height?: number;
}) {
  const [flipped, setFlipped] = React.useState(false);
  const toggle = () => setFlipped((v) => !v);

  return (
    <Box sx={{ perspective: 1200 }}>
      <Box
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`${title}. ${flipped ? "Showing key points. Activate to flip back." : "Activate to view key points."}`}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        sx={{
          cursor: "pointer",
          outline: "none",
          borderRadius: CARD_RADIUS,
          "&:focus-visible": { boxShadow: "0 0 0 4px rgba(26,115,232,0.25)" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            height,
            transformStyle: "preserve-3d",
            transition: "transform 520ms cubic-bezier(.2,.8,.2,1)",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* FRONT */}
          <Paper
            variant="outlined"
            sx={{
              position: "absolute",
              inset: 0,
              p: 1.75,
              borderRadius: CARD_RADIUS,
              backfaceVisibility: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "transform 180ms ease, box-shadow 180ms ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 12px 28px rgba(26,115,232,0.12)",
              },
            }}
          >
            <Stack direction="row" spacing={1.1} alignItems="center" sx={{ mb: 0.75 }}>
              {icon}
              <Typography sx={{ fontWeight: 900, fontSize: CARD_TITLE_FS, lineHeight: 1.2 }}>
                {title}
              </Typography>
            </Stack>

            {subtitle && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: CARD_SUBTITLE_FS, lineHeight: 1.5 }}
              >
                {subtitle}
              </Typography>
            )}

            <Box sx={{ flexGrow: 1 }} />

            <Typography variant="caption" color="text.secondary">
              <Box component="span" sx={{ fontWeight: 800, color: "text.primary" }}>
                Click
              </Box>{" "}
              to see how
            </Typography>
          </Paper>

          {/* BACK */}
          <Paper
            variant="outlined"
            sx={{
              position: "absolute",
              inset: 0,
              p: 1.75,
              borderRadius: CARD_RADIUS,
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontWeight: 900, mb: 0.25, fontSize: FLIP_TITLE_FS, lineHeight: 1.2 }}>
              How
            </Typography>

            <BulletList items={points} textVariant={FLIP_TEXT_VARIANT} compact />

            <Box sx={{ flexGrow: 1 }} />

            <Typography variant="caption" color="text.secondary">
              <Box component="span" sx={{ fontWeight: 800, color: "text.primary" }}>
                Click
              </Box>{" "}
              to flip back
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

/* =======================
   Flip Card – Impact
======================= */

function ImpactFlipCard({
  title,
  oneLiner,
  story,
  icon,
}: {
  title: string;
  oneLiner: string;
  story: string[];
  icon: React.ReactNode;
}) {
  const [flipped, setFlipped] = React.useState(false);
  const toggle = () => setFlipped((v) => !v);

  const CARD_H = 250;

  return (
    <Box sx={{ perspective: 1200 }}>
      <Box
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`${title}. ${flipped ? "Showing summary. Activate to flip back." : "Activate to view summary."}`}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        sx={{
          cursor: "pointer",
          outline: "none",
          borderRadius: CARD_RADIUS,
          "&:focus-visible": { boxShadow: "0 0 0 4px rgba(26,115,232,0.25)" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: CARD_H,
            transformStyle: "preserve-3d",
            transition: "transform 520ms cubic-bezier(.2,.8,.2,1)",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* FRONT */}
          <Paper
            sx={{
              position: "absolute",
              inset: 0,
              p: 2.0,
              borderRadius: CARD_RADIUS,
              backfaceVisibility: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "transform 180ms ease, box-shadow 180ms ease",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 16px 40px rgba(26,115,232,0.12)",
              },
            }}
          >
            <Stack direction="row" spacing={1.0} alignItems="center">
              {icon}
              <Typography sx={{ fontWeight: 900, fontSize: CARD_TITLE_FS, lineHeight: 1.2 }}>
                {title}
              </Typography>
            </Stack>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mt: 1.0,
                lineHeight: 1.6,
                fontWeight: 600,
                fontSize: CARD_SUBTITLE_FS,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {oneLiner}
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

            <Typography variant="caption" color="text.secondary">
              <Box component="span" sx={{ fontWeight: 800, color: "text.primary" }}>
                Click
              </Box>{" "}
              to view summary
            </Typography>
          </Paper>

          {/* BACK */}
          <Paper
            sx={{
              position: "absolute",
              inset: 0,
              p: 2.0,
              borderRadius: CARD_RADIUS,
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <Typography sx={{ fontWeight: 900, mb: 0.75, fontSize: FLIP_TITLE_FS, lineHeight: 1.2 }}>
              Summary
            </Typography>

            <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
              {story.map((p) => (
                <Typography
                  key={p}
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: "block", lineHeight: 1.42, mb: 0.85 }}
                >
                  {p}
                </Typography>
              ))}
            </Box>

            <Typography variant="caption" color="text.secondary" sx={{ mt: 0.25 }}>
              <Box component="span" sx={{ fontWeight: 800, color: "text.primary" }}>
                Click
              </Box>{" "}
              to flip back
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

/* =======================
   Main Page
======================= */

export default function Home() {
  const introOptions = PROFILE.introOptions;
  const [introIndex, setIntroIndex] = React.useState(0);
  const timerRef = React.useRef<number | null>(null);

  const goNext = React.useCallback(() => {
    setIntroIndex((i) => (i + 1) % introOptions.length);
  }, [introOptions.length]);

  const goPrev = React.useCallback(() => {
    setIntroIndex((i) => (i - 1 + introOptions.length) % introOptions.length);
  }, [introOptions.length]);

  const resetTimer = React.useCallback(() => {
    if (typeof window === "undefined") return;
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(goNext, 15000);
  }, [goNext]);

  React.useEffect(() => {
    resetTimer();
    return () => {
      if (typeof window === "undefined") return;
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const activeIntro = introOptions[introIndex];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        zoom: 0.85,
        "@supports not (zoom: 1)": {
          transform: "scale(0.85)",
          transformOrigin: "top center",
          width: "133.333%",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper
          sx={{
            position: "relative",
            overflow: "hidden",
            p: { xs: 2.5, md: 3 },
            pt: { xs: 2.75, md: 3.25 },
            mb: 3,
            borderRadius: FRAME_RADIUS,
          }}
        >
          <ChakraTopBar height={8} />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "340px 1fr" },
              gap: 3,
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: 340 },
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  width: 260,
                  height: 260,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.08)",
                  bgcolor: "background.paper",
                  position: "relative",
                }}
              >
                <Image
                  src="/profile.jpg"
                  alt={PROFILE.name}
                  fill
                  sizes="260px"
                  priority
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </Box>
            </Box>

            <Box>
              <Typography variant="h4" sx={{ fontWeight: 900, lineHeight: 1.15 }}>
                {PROFILE.name}
              </Typography>

              <Typography variant="h6" sx={{ mt: 0.5, fontWeight: 700, color: "text.primary" }}>
                {PROFILE.tagline}
              </Typography>

              <Stack direction={{ xs: "column", md: "row" }} spacing={1} sx={{ mt: 2 }}>
                {PROFILE.valueChips.map((c) => (
                  <Chip key={c} label={c} />
                ))}
              </Stack>

              <Divider sx={{ my: 2.25 }} />

              {/*<Typography variant="h5" sx={{ fontWeight: 900 }}>
                Introduction
              </Typography>*/}
              <Divider sx={{ my: 2 }} />

              <Box
                role="region"
                aria-label="Introduction carousel"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") {
                    e.preventDefault();
                    goNext();
                    resetTimer();
                  }
                  if (e.key === "ArrowLeft") {
                    e.preventDefault();
                    goPrev();
                    resetTimer();
                  }
                }}
                sx={{
                  outline: "none",
                  "&:focus-visible": { boxShadow: "0 0 0 4px rgba(26,115,232,0.25)" },
                }}
              >
                {activeIntro.map((p) => (
                  <Typography key={p} variant="body2" color="text.secondary" sx={{ mb: 1.25, lineHeight: 1.7 }}>
                    {p}
                  </Typography>
                ))}

                {/* ✅ Tip + arrows in ONE row, aligned */}
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ mt: 1 }}
                >
                  <Typography variant="caption" color="text.secondary">
                    Tip: use ← / → to switch
                  </Typography>

                  <Stack direction="row" spacing={1} alignItems="center">
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => {
                        goPrev();
                        resetTimer();
                      }}
                      sx={{ minWidth: 44, px: 0.5, borderRadius: 0 }}
                      aria-label="Previous introduction"
                    >
                      ←
                    </Button>

                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => {
                        goNext();
                        resetTimer();
                      }}
                      sx={{ minWidth: 44, px: 0.5, borderRadius: 0 }}
                      aria-label="Next introduction"
                    >
                      →
                    </Button>
                  </Stack>
                </Stack>

                {/* Dots */}
                <Stack direction="row" spacing={0.75} sx={{ mt: 0.75 }}>
                  {introOptions.map((_, idx) => (
                    <Box
                      key={idx}
                      aria-hidden
                      sx={{
                        width: idx === introIndex ? 18 : 8,
                        height: 8,
                        borderRadius: 999,
                        backgroundColor: idx === introIndex ? "rgba(26,115,232,0.55)" : "rgba(0,0,0,0.15)",
                        transition: "width 200ms ease",
                      }}
                    />
                  ))}
                </Stack>
              </Box>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 2.5 }}>
                <Button variant="contained" href="#capabilities">
                  Capabilities
                </Button>

                <Button variant="outlined" href="#impact">
                  Impact
                </Button>

                <Button variant="outlined" href="#certifications">
                  Certifications
                </Button>

                <Button variant="outlined" href="#lets-talk" startIcon={<MailOutlineIcon />}>
                  Let’s Talk
                </Button>

                <Button
                  variant="text"
                  startIcon={<DownloadIcon />}
                  component="a"
                  href={LINKS.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </Button>
              </Stack>
            </Box>
          </Box>
        </Paper>

        {/* CAPABILITIES */}
        <Reveal>
          <Section id="capabilities" title="Capabilities & Services" subtitle="Where I typically create the most impact.">
            <Box sx={{ display: "grid", gap: 1.5, gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" } }}>
              <FlipInfoCard
                icon={<RocketLaunchIcon color="primary" />}
                title="Program & Delivery Leadership"
                subtitle="Complex delivery environments where risk is high."
                points={[
                  "Create decision signals leaders can trust (risk, scope, dependencies)",
                  "Drive alignment across engineering, architecture, and business stakeholders",
                  "Establish delivery rhythms that produce predictable outcomes",
                ]}
              />

              <FlipInfoCard
                icon={<HubIcon color="primary" />}
                title="Architecture & Platform Readiness"
                subtitle="Design reviews that translate into smoother execution."
                points={[
                  "Validate performance & scalability assumptions early",
                  "Reduce integration risk across hybrid stacks and platforms",
                  "Convert architecture intent into delivery-ready checkpoints",
                ]}
              />

              <FlipInfoCard
                icon={<VerifiedIcon color="primary" />}
                title="Quality Engineering & Reliability"
                subtitle="Confidence through standards, signals, and governance."
                points={[
                  "Define clear entry/exit criteria and readiness gates",
                  "Reduce late-cycle surprises with shift-left validation",
                  "Use measurable quality signals to strengthen go-live confidence",
                ]}
              />

              <FlipInfoCard
                icon={<SmartToyIcon color="primary" />}
                title="Intelligent Automation & AI Enablement"
                subtitle="Automation that strengthens trust, not noise."
                points={[
                  "Build traceable flows: requirement → tests → review → execution",
                  "Adopt AI with guardrails, governance, and measurable outcomes",
                  "Scale automation without destabilizing release execution",
                ]}
              />
            </Box>
          </Section>
        </Reveal>

        {/* IMPACT */}
        <Reveal>
          <Section id="impact" title="Impact" subtitle="Three resume-backed outcomes (flip for Summary).">
            <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" } }}>
              {IMPACT.map((i) => (
                <ImpactFlipCard key={i.title} title={i.title} oneLiner={i.oneLiner} story={i.story} icon={i.icon} />
              ))}
            </Box>
          </Section>
        </Reveal>

        {/* CERTIFICATIONS */}
        <Reveal>
          <Section id="certifications" title="Certifications" subtitle="Verified credentials (open PDF in new tab).">
            <Box
              sx={{
                display: "grid",
                gap: 1.25,
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 300px)", md: "repeat(3, 1fr)" },
                justifyContent: "flex-start",
                alignItems: "start",
                maxWidth: 980,
              }}
            >
              {CERTIFICATIONS.map((cert) => (
                <Button
                  key={cert.title}
                  variant="outlined"
                  component="a"
                  href={cert.href}
                  target="_blank"
                  rel="noreferrer"
                  startIcon={<OpenInNewIcon />}
                  sx={{
                    width: "100%",
                    textTransform: "none",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    py: 1,
                    px: 1.25,
                    borderRadius: 999,
                    gap: 1,
                    "& .MuiButton-startIcon": { mt: "2px" },
                    "&:hover": { boxShadow: "0 8px 24px rgba(26,115,232,0.12)", backgroundColor: "rgba(26,115,232,0.04)" },
                    "&:focus-visible": { boxShadow: "0 0 0 4px rgba(26,115,232,0.25)" },
                  }}
                >
                  <Box textAlign="left" sx={{ minWidth: 0 }}>
                    <Typography variant="body2" sx={{ fontWeight: 900, lineHeight: 1.25, whiteSpace: "normal" }}>
                      {cert.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {cert.org} • {cert.year}
                    </Typography>
                  </Box>
                </Button>
              ))}
            </Box>

          </Section>
        </Reveal>

        {/* HOW I HELP */}
        <Reveal>
          <Section
            id="how-i-help"
            title="How I Help Teams Succeed"
            subtitle="My TPM operating model aligned to PMI’s People, Process, and Business Environment."
          >
            <Box sx={{ display: "grid", gap: 1.5, gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" } }}>
              <FlipInfoCard
                height={190}
                icon={<GroupsIcon color="primary" />}
                title="People"
                subtitle="Align leaders and teams so execution moves as one."
                points={[
                  "Drive stakeholder alignment across engineering, architecture, and business",
                  "Establish operating rhythms (health checks, retros, decision forums) that build momentum",
                  "Build delivery capability through coaching, playbooks, and accountability",
                ]}
              />

              <FlipInfoCard
                height={190}
                icon={<AccountTreeIcon color="primary" />}
                title="Process"
                subtitle="Make delivery predictable with measurable readiness signals."
                points={[
                  "Define scope, entry/exit criteria, and quality gates to reduce late-cycle surprises",
                  "Instrument KPIs/dashboards so status is decision-ready, not narrative",
                  "Run risk-based planning + triage to unblock dependencies and protect timelines",
                ]}
              />

              <FlipInfoCard
                height={190}
                icon={<PublicIcon color="primary" />}
                title="Business Environment"
                subtitle="Tie technical work to outcomes leaders care about."
                points={[
                  "Translate goals into executable NFRs and measurable success metrics",
                  "Make tradeoffs explicit (time/cost/risk) and align teams around value delivery",
                  "Enable go/no-go decisions with clear impact, risk posture, and mitigation readiness",
                ]}
              />
            </Box>
          </Section>
        </Reveal>

        {/* LET’S TALK */}
        <Reveal>
          <Section id="lets-talk" title="Let’s Talk" subtitle="If you’re navigating complex delivery, reliability risk, or platform scale challenges, I’m happy to explore how I can help.">

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button variant="contained" component="a" href={LINKS.email}>
                Email
              </Button>
              <Button variant="outlined" component="a" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </Button>
            </Stack>
          </Section>
        </Reveal>
      </Container>
    </Box>
  );
}
