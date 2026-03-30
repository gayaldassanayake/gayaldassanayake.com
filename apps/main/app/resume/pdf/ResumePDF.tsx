import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";
import type { Resume } from "@repo/content-utils";

const c = {
  dark: "#1a1a2e",
  body: "#222222",
  muted: "#555555",
  faint: "#888888",
  rule: "#cccccc",
};

const s = StyleSheet.create({
  page: {
    fontFamily: "Times-Roman",
    fontSize: 10.5,
    color: c.body,
    paddingTop: 42,
    paddingBottom: 42,
    paddingHorizontal: 50,
    lineHeight: 1.5,
  },
  // ── Header ──────────────────────────────────────────────
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  name: {
    fontSize: 22,
    fontFamily: "Times-Bold",
    color: c.dark,
  },
  contactBlock: {
    alignItems: "flex-end",
  },
  contactLine: {
    fontSize: 9,
    color: c.muted,
    marginBottom: 1.5,
    textAlign: "right",
    textDecoration: "none",
  },
  // ── Headline + rule ─────────────────────────────────────
  headline: {
    fontSize: 10.5,
    fontFamily: "Times-Bold",
    color: c.dark,
    marginBottom: 7,
  },
  rule: {
    borderBottomWidth: 0.75,
    borderBottomColor: c.rule,
    marginBottom: 10,
  },
  // ── Section title ────────────────────────────────────────
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Times-Bold",
    color: c.dark,
    textAlign: "center",
    marginBottom: 7,
    marginTop: 10,
  },
  sectionTitleItalic: {
    fontSize: 11,
    fontFamily: "Times-BoldItalic",
    color: c.dark,
    textAlign: "center",
    marginBottom: 7,
    marginTop: 10,
  },
  // ── Top Skills (bullet list) ─────────────────────────────
  skillBullet: {
    flexDirection: "row",
    marginBottom: 3,
    paddingLeft: 4,
  },
  skillDot: {
    width: 14,
    fontSize: 10,
    color: c.body,
  },
  skillContent: {
    flex: 1,
    fontSize: 10,
  },
  skillName: {
    fontFamily: "Times-Bold",
  },
  // ── Experience ───────────────────────────────────────────
  expEntry: {
    marginBottom: 10,
  },
  companyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 6,
    marginBottom: 1,
  },
  companyName: {
    fontFamily: "Times-Bold",
    fontSize: 10.5,
    color: c.dark,
  },
  companyDesc: {
    fontFamily: "Times-Italic",
    fontSize: 9.5,
    color: c.muted,
    marginBottom: 3,
  },
  roleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  roleText: {
    fontFamily: "Times-BoldItalic",
    fontSize: 10,
    color: c.dark,
  },
  periodText: {
    fontSize: 9.5,
    color: c.muted,
  },
  expBullet: {
    flexDirection: "row",
    marginBottom: 2,
    paddingLeft: 8,
  },
  expBulletDot: {
    width: 12,
    fontSize: 10,
    color: c.body,
  },
  expBulletText: {
    flex: 1,
    fontSize: 9.5,
    color: c.body,
  },
  // ── Education ────────────────────────────────────────────
  eduEntry: {
    marginBottom: 7,
  },
  eduRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  eduDegreeInstitution: {
    flex: 1,
    fontSize: 10,
    color: c.dark,
  },
  eduDegreeBold: {
    fontFamily: "Times-Bold",
    fontSize: 10,
    color: c.dark,
  },
  eduPeriod: {
    fontSize: 9.5,
    color: c.muted,
  },
  eduGpaBullet: {
    flexDirection: "row",
    paddingLeft: 8,
  },
  eduGpaDot: {
    width: 12,
    fontSize: 10,
    color: c.body,
  },
  eduGpaText: {
    fontSize: 9.5,
    color: c.muted,
  },
  // ── Certifications ───────────────────────────────────────
  certRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  certName: {
    fontFamily: "Times-Bold",
    fontSize: 10,
    color: c.dark,
  },
  certValid: {
    fontSize: 9.5,
    color: c.muted,
  },
  // ── Projects ─────────────────────────────────────────────
  projEntry: {
    marginBottom: 9,
  },
  projRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  projName: {
    fontFamily: "Times-Bold",
    fontSize: 10,
    color: c.dark,
  },
  projPeriod: {
    fontSize: 9.5,
    color: c.muted,
  },
  projDesc: {
    fontSize: 9.5,
    color: c.body,
    marginBottom: 2,
  },
  projMeta: {
    fontSize: 9.5,
    color: c.body,
    marginBottom: 1,
  },
  projLink: {
    fontSize: 9.5,
    color: "#0066cc",
  },
});

export function ResumePDF({ resume }: { resume: Resume }) {
  return (
    <Document
      title={`${resume.name} — Resume`}
      author={resume.name}
      subject="Resume"
    >
      <Page size="A4" style={s.page}>

        {/* ── Header: name left, contacts right ── */}
        <View style={s.headerRow}>
          <Text style={s.name}>{resume.name}</Text>
          <View style={s.contactBlock}>
            <Link src={`mailto:${resume.contact.email}`} style={s.contactLine}>
              {resume.contact.email}
            </Link>
            {resume.contact.phone && (
              <Text style={s.contactLine}>{resume.contact.phone}</Text>
            )}
            <Link src={resume.contact.linkedin} style={s.contactLine}>
              {resume.contact.linkedin.replace("https://", "")}
            </Link>
            <Link src={resume.contact.github} style={s.contactLine}>
              {resume.contact.github.replace("https://", "")}
            </Link>
            {resume.contact.medium && (
              <Link src={resume.contact.medium} style={s.contactLine}>
                {resume.contact.medium.replace("https://", "")}
              </Link>
            )}
            {resume.contact.website && (
              <Link src={resume.contact.website} style={s.contactLine}>
                {resume.contact.website.replace("https://", "")}
              </Link>
            )}
          </View>
        </View>

        {/* ── Headline + rule ── */}
        <Text style={s.headline}>{resume.headline}</Text>
        <View style={s.rule} />

        {/* ── Top Skills ── */}
        {resume.topSkills && resume.topSkills.length > 0 && (
          <View>
            <Text style={s.sectionTitleItalic}>Top Skills</Text>
            {resume.topSkills.map((skill) => (
              <View key={skill.name} style={s.skillBullet}>
                <Text style={s.skillDot}>•</Text>
                <Text style={s.skillContent}>
                  <Text style={s.skillName}>{skill.name}</Text>
                  {" - "}{skill.description}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* ── Work Experience ── */}
        {resume.experience.length > 0 && (
          <View>
            <Text style={s.sectionTitleItalic}>Work Experience</Text>
            {resume.experience.map((exp, i) => (
              <View key={i} style={s.expEntry}>
                <View style={s.companyRow}>
                  <Text style={s.companyName}>{exp.company}</Text>
                </View>
                {exp.companyDescription && (
                  <Text style={s.companyDesc}>{exp.companyDescription}</Text>
                )}
                <View style={s.roleRow}>
                  <Text style={s.roleText}>{exp.role}</Text>
                  <Text style={s.periodText}>{exp.period}</Text>
                </View>
                {exp.bullets.map((bullet, j) => (
                  <View key={j} style={s.expBullet}>
                    <Text style={s.expBulletDot}>•</Text>
                    <Text style={s.expBulletText}>{bullet}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* ── Education ── */}
        {resume.education.length > 0 && (
          <View>
            <Text style={s.sectionTitleItalic}>Education</Text>
            {resume.education.map((edu, i) => (
              <View key={i} style={s.eduEntry}>
                <View style={s.eduRow}>
                  <Text style={s.eduDegreeInstitution}>
                    <Text style={s.eduDegreeBold}>{edu.degree}</Text>
                    {", "}{edu.institution}
                  </Text>
                  <Text style={s.eduPeriod}>{edu.period}</Text>
                </View>
                {edu.gpa && (
                  <View style={s.eduGpaBullet}>
                    <Text style={s.eduGpaDot}>•</Text>
                    <Text style={s.eduGpaText}>GPA - {edu.gpa}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        {/* ── Certifications ── */}
        {resume.certifications && resume.certifications.length > 0 && (
          <View>
            <Text style={s.sectionTitleItalic}>Certifications</Text>
            {resume.certifications.map((cert, i) => (
              <View key={i} style={s.certRow}>
                <Text style={s.certName}>{cert.name}</Text>
                <Text style={s.certValid}>Valid through {cert.valid}</Text>
              </View>
            ))}
          </View>
        )}

        {/* ── Projects ── */}
        {resume.projects && resume.projects.length > 0 && (
          <View>
            <Text style={s.sectionTitleItalic}>Projects</Text>
            {resume.projects.map((project, i) => (
              <View key={i} style={s.projEntry}>
                <View style={s.projRow}>
                  <Text style={s.projName}>{project.name}</Text>
                  <Text style={s.projPeriod}>{project.period}</Text>
                </View>
                {project.description && (
                  <Text style={s.projDesc}>{project.description}</Text>
                )}
                {project.technologies && project.technologies.length > 0 && (
                  <Text style={s.projMeta}>
                    Technologies used - {project.technologies.join(", ")}
                  </Text>
                )}
                {project.githubUrl && (
                  <Text style={s.projMeta}>
                    {"GitHub Repository - "}
                    <Link src={project.githubUrl} style={s.projLink}>
                      {project.githubUrl}
                    </Link>
                  </Text>
                )}
                {project.demoUrl && (
                  <Text style={s.projMeta}>
                    {"Hosted Website - "}
                    <Link src={project.demoUrl} style={s.projLink}>
                      {project.demoUrl}
                    </Link>
                  </Text>
                )}
              </View>
            ))}
          </View>
        )}

      </Page>
    </Document>
  );
}
