import { Icons } from "@/components/icons";
import { MotionDiv } from "@/components/motion-div";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Monitor, User, BookOpen } from "lucide-react";

const Skills = async () => {
  const skills = [
    {
      name: "JavaScript",
      icon: <Icons.javascript className="w-8 h-8 text-yellow-400" />,
      level: 90,
      category: "web",
    },
    {
      name: "Next.js",
      icon: (
        <Icons.nextjs className="w-8 h-8 dark:text-gray-100 text-gray-800" />
      ),
      level: 85,
      category: "web",
    },
    {
      name: "React",
      icon: <Icons.react className="w-8 h-8 text-sky-500" />,
      level: 88,
      category: "web",
    },
    {
      name: "Node.js",
      icon: <Icons.nodejs className="w-8 h-8 text-green-500" />,
      level: 80,
      category: "web",
    },
    {
      name: "MongoDB",
      icon: <Icons.mongodb className="w-8 h-8 text-green-600" />,
      level: 75,
      category: "web",
    },
    {
      name: "TypeScript",
      icon: <Icons.typescript className="w-8 h-8 text-blue-600" />,
      level: 70,
      category: "web",
    },
    {
      name: "Communication",
      icon: <Icons.communication className="w-8 h-8 text-purple-500" />,
      level: 95,
      category: "soft",
    },
    {
      name: "Teaching",
      icon: <Icons.teaching className="w-8 h-8 text-rose-500" />,
      level: 90,
      category: "soft",
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300 border-blue-200 dark:border-blue-800"
          >
            My Expertise
          </Badge>
          <h2 className="text-4xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Professional Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-3 text-lg">
            Continuously learning and improving to deliver exceptional solutions
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <MotionDiv
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="items-center space-y-4">
                <div className="p-5 bg-blue-100/50 dark:bg-blue-900/20 rounded-full">
                  <User className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Personal Skills
                </h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-lg">
                  Creativity, Communication, Problem Solving, Leadership
                </p>
              </CardContent>
            </Card>
          </MotionDiv>

          <MotionDiv
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="items-center space-y-4">
                <div className="p-5 bg-emerald-100/50 dark:bg-emerald-900/20 rounded-full">
                  <Monitor className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Web Development
                </h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-lg">
                  Next.js, React, Node.js, MongoDB, TypeScript
                </p>
              </CardContent>
            </Card>
          </MotionDiv>

          <MotionDiv
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="items-center space-y-4">
                <div className="p-5 bg-purple-100/50 dark:bg-purple-900/20 rounded-full">
                  <BookOpen className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Education
                </h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-lg">
                  Curriculum Development, Teaching Strategies, Learning
                  Materials
                </p>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <MotionDiv
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
              viewport={{ once: true, margin: "-50px" }}
              className={`flex flex-col items-center gap-3 p-6 rounded-xl backdrop-blur-sm transition-all
                ${
                  skill.category === "web"
                    ? "bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md"
                    : "bg-white/90 dark:bg-gray-800/90 border border-gray-100 dark:border-gray-600 shadow hover:shadow-lg"
                }`}
            >
              <div
                className={`p-4 rounded-full ${
                  skill.category === "web"
                    ? "bg-blue-50 dark:bg-blue-900/20"
                    : "bg-purple-50 dark:bg-purple-900/20"
                }`}
              >
                {skill.icon}
              </div>
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </span>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    skill.category === "web" ? "bg-blue-600" : "bg-purple-600"
                  }`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
