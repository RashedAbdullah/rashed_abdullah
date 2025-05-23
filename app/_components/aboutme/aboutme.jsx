import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Icons } from "@/components/icons";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default async function AboutMe() {
  const skills = [
    {
      name: "JavaScript",
      icon: <Icons.javascript className="w-6 h-6 text-yellow-400" />,
      level: 90,
    },
    { name: "Next.js", icon: <Icons.nextjs className="w-6 h-6" />, level: 85 },
    {
      name: "React",
      icon: <Icons.react className="w-6 h-6 text-sky-400" />,
      level: 88,
    },
    {
      name: "Node.js",
      icon: <Icons.nodejs className="w-6 h-6 text-green-500" />,
      level: 80,
    },
    {
      name: "MongoDB",
      icon: <Icons.mongodb className="w-6 h-6 text-green-600" />,
      level: 75,
    },
    {
      name: "TypeScript",
      icon: <Icons.typescript className="w-6 h-6 text-blue-600" />,
      level: 70,
    },
  ];

  return (
    <section className="flex flex-col justify-center min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Profile Image - Improved Version */}
            <div className="lg:w-1/2 flex justify-center px-4 sm:px-0">
              <div className="relative group w-full max-w-md">
                {/* Glow effect */}
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-500"></div>

                {/* Image container with mobile fixes */}
                <div className="relative w-[95vw] sm:w-full h-[300px] sm:h-[400px] md:aspect-square rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl z-10">
                  <Image
                    src="/rashed.jpg"
                    alt="Rashed Abdullah"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                  />
                </div>

                {/* Tech badges - optional */}
                <div className="absolute -bottom-4 -right-4 flex gap-2 z-20">
                  <div className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                    <Icons.react className="w-6 h-6 text-sky-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content - Rest remains the same */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="text-sm font-medium bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  About Me
                </Badge>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  Developer & Educator
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Bridging technology and education through innovative digital
                  solutions
                </p>
              </div>

              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                  <TabsTrigger
                    value="about"
                    className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-blue-600 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-blue-400 rounded-md transition-all"
                  >
                    About
                  </TabsTrigger>
                  <TabsTrigger
                    value="skills"
                    className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-blue-600 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-blue-400 rounded-md transition-all"
                  >
                    Skills
                  </TabsTrigger>
                  <TabsTrigger
                    value="education"
                    className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-blue-600 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-blue-400 rounded-md transition-all"
                  >
                    Education
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="pt-6">
                  <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm">
                    <p className="text-gray-700 dark:text-gray-300">
                      With a passion for both technology and education, I bridge
                      the gap between these two worlds by creating digital
                      solutions that enhance learning experiences. My journey
                      began in 2022, and since then I&lsquo;ve been committed to
                      building accessible, efficient software while also
                      teaching at Jamiatul Latif Rupganj.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300"
                      >
                        Full-Stack Development
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-300"
                      >
                        Teaching
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-300"
                      >
                        Open Source
                      </Badge>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="skills" className="pt-6">
                  <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="space-y-6">
                      {skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {skill.icon}
                              <span className="font-medium text-gray-800 dark:text-gray-200">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress
                            value={skill.level}
                            className="h-2 bg-gray-200 dark:bg-gray-700"
                          />
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="education" className="pt-6">
                  <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="space-y-6">
                      {/* Self */}
                      <div className="relative pl-8">
                        <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-emerald-500 -translate-x-1/2"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                            Self-Taught Developer
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Front-end Development
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-500">
                            2022 - Present
                          </p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="relative pl-8 pb-6">
                        <div className="absolute left-0 top-1 h-full w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500"></div>
                        <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-blue-500 -translate-x-1/2"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                            Jamia Sharyeah Malibagh, Dhaka
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Student
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-500">
                            2018 - 2022
                          </p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="relative pl-8 pb-6">
                        <div className="absolute left-0 top-1 h-full w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500"></div>
                        <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-blue-500 -translate-x-1/2"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                            Jamia Madanifa Feni
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Student
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-500">
                            2013 - 2018
                          </p>
                        </div>
                      </div>
                      {/*  */}
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
