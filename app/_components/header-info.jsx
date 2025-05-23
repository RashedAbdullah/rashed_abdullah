import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { MotionDiv } from "@/components/motion-div";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, MapPin, Phone, Link2 } from "lucide-react";
import { Icons } from "@/components/icons";

const skills = [
  {
    name: "JavaScript",
    icon: <Icons.javascript className="w-5 h-5 text-yellow-400" />,
    level: 90,
  },
  {
    name: "Next.js",
    icon: <Icons.nextjs className="w-5 h-5" />,
    level: 85,
  },
  {
    name: "React",
    icon: <Icons.react className="w-5 h-5 text-sky-400" />,
    level: 88,
  },
  {
    name: "Node.js",
    icon: <Icons.nodejs className="w-5 h-5 text-green-500" />,
    level: 80,
  },
];

export const HeaderInfo = () => {
  return (
    <section className="relative flex items-center min-h-screen justify-center overflow-hidden">
      <div className="container relative z-10 py-12">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <MotionDiv whileHover={{ y: -5 }} className="w-full max-w-sm">
              <Card className="border border-gray-200 dark:border-gray-800 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 opacity-30 dark:from-blue-900/10 dark:to-gray-900/10"></div>
                <CardHeader className="items-center space-y-4 relative z-10 pt-8">
                  <Avatar className="h-32 w-32 border-4 border-white dark:border-gray-800 shadow-md group-hover:scale-105 transition-transform duration-300">
                    <AvatarImage src="/logo.png" alt="Rashed Abdullah" />
                    <AvatarFallback className="bg-gradient-to-br from-blue-600 to-emerald-600 text-white font-bold">
                      RA
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                      Rashed Abdullah
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                      Software Developer & Educator
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 relative z-10">
                  <div className="flex items-center gap-4 p-3 bg-white/70 dark:bg-gray-700/70 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition border border-gray-100 dark:border-gray-700">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      maarashed40@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-white/70 dark:bg-gray-700/70 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition border border-gray-100 dark:border-gray-700">
                    <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Dhaka, Bangladesh
                    </span>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-white/70 dark:bg-gray-700/70 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition border border-gray-100 dark:border-gray-700">
                    <Phone className="h-5 w-5 text-blue-500 dark:text-blue-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      +8801603-443214
                    </span>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-white/70 dark:bg-gray-700/70 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition border border-gray-100 dark:border-gray-700">
                    <Link2 className="h-5 w-5 text-emerald-500 dark:text-emerald-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      www.rashedabdullah.com
                    </span>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <Badge
                variant="outline"
                className="text-sm font-medium bg-blue-100/70 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 border-blue-200 dark:border-blue-800"
              >
                Welcome to my portfolio
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
                Building{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  modern solutions
                </span>{" "}
                <br />
                with{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  cutting-edge tech
                </span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300">
                I develop high-performance web applications using React,
                Next.js, and Node.js, while creating educational content to help
                others in the tech community.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <MotionDiv
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="outline"
                    className="gap-2 px-4 py-2 rounded-lg bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border-gray-200 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-700 transition"
                  >
                    {skill.icon}
                    {skill.name}
                  </Badge>
                </MotionDiv>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <MotionDiv
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  className="rounded-lg px-8 bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-md hover:shadow-blue-200/40 dark:hover:shadow-blue-500/20"
                >
                  View My Work
                </Button>
              </MotionDiv>
              <MotionDiv
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-lg px-8 border-gray-300 dark:border-gray-600 hover:bg-white/80 dark:hover:bg-gray-700/80"
                >
                  Contact Me
                </Button>
              </MotionDiv>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default HeaderInfo;
