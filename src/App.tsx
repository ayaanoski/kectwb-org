/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { VisionMission } from "@/pages/VisionMission";
import { Trustees } from "@/pages/Trustees";
import { Milestones } from "@/pages/Milestones";
import { Academy, AcademyIntro, AcademyApproach, AcademyCurriculum, AcademyFacilities, AcademyAdmission } from "@/pages/projects/Academy";
import { Coaching } from "@/pages/projects/Coaching";
import { SkillDevelopment } from "@/pages/projects/SkillDevelopment";
import { HealthyBites } from "@/pages/projects/HealthyBites";
import { OtherProjects } from "@/pages/projects/OtherProjects";
import { AnnualReports } from "@/pages/news/AnnualReports";
import { Publications } from "@/pages/news/Publications";
import { Pandemic } from "@/pages/news/Pandemic";
import { Events } from "@/pages/news/Events";
import { GetInvolved } from "@/pages/GetInvolved";
import { Gallery } from "@/pages/Gallery";
import { Contact } from "@/pages/Contact";
import { Donate } from "@/pages/Donate";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vision-mission" element={<VisionMission />} />
        <Route path="trustees" element={<Trustees />} />
        <Route path="milestones" element={<Milestones />} />
        
        <Route path="projects">
          <Route index element={<Navigate to="academy" replace />} />
          <Route path="academy" element={<Academy />}>
            <Route index element={<AcademyIntro />} />
            <Route path="introduction" element={<AcademyIntro />} />
            <Route path="approach" element={<AcademyApproach />} />
            <Route path="curriculum" element={<AcademyCurriculum />} />
            <Route path="facilities" element={<AcademyFacilities />} />
            <Route path="admission" element={<AcademyAdmission />} />
          </Route>
          <Route path="coaching" element={<Coaching />} />
          <Route path="skill-development" element={<SkillDevelopment />} />
          <Route path="healthy-bites" element={<HealthyBites />} />
          <Route path="other" element={<OtherProjects />} />
        </Route>

        <Route path="news">
          <Route index element={<Navigate to="events" replace />} />
          <Route path="annual-reports" element={<AnnualReports />} />
          <Route path="publications" element={<Publications />} />
          <Route path="pandemic" element={<Pandemic />} />
          <Route path="events" element={<Events />} />
        </Route>

        <Route path="get-involved" element={<GetInvolved />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="donate" element={<Donate />} />
      </Route>
    </Routes>
  );
}
