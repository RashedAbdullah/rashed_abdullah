"use client";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MotionDiv } from "@/components/motion-div";
import emailjs from "emailjs-com";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import FooterSocial from "../social";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const serviceID = "service_bo8oxl3";
      const templateID = "template_l7aby7b";
      const userID = "ktj3Jf0AR-bisFerP";

      await emailjs.send(serviceID, templateID, data, userID);

      form.reset();
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! I'll get back to you soon.",
        variant: "default",
        className: "bg-green-500 text-white",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:to-purple-400 text-zinc-800 dark:text-white"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>
          <Separator className="w-20 mx-auto mb-4 bg-gradient-to-r from-primary to-purple-600 dark:to-purple-400 h-[2px]" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I&apos;d love to hear from you!
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 transition-colors border border-border/50"
              >
                <div className="bg-primary/10 p-3 rounded-full dark:bg-primary/20">
                  <FiMail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">maarashed40@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-muted/50  transition-colors border border-border/50"
              >
                <div className="bg-primary/10 p-3 rounded-full dark:bg-primary/20">
                  <FiPhone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">+8801603443214</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-muted/50  transition-colors border border-border/50"
              >
                <div className="bg-primary/10 p-3 rounded-full dark:bg-primary/20">
                  <FiMapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">
                    ECB Chattar, Dhaka, Bangladesh
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="pt-4">
              <h4 className="font-medium mb-3">Follow me on</h4>
              <FooterSocial />
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border shadow-sm transition-shadow hover:shadow-md bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-black dark:text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Send me a message
                </CardTitle>
                <p className="text-muted-foreground">
                  I typically respond within 24 hours
                </p>
              </CardHeader>

              <CardContent>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  {/* Name field */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      {...form.register("name")}
                      placeholder="Your name"
                      className={cn("bg-white dark:bg-gray-900", {
                        "border-destructive": form.formState.errors.name,
                      })}
                    />
                    {form.formState.errors.name && (
                      <p className="text-sm text-destructive">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      placeholder="email@example.com"
                      className={cn("bg-white dark:bg-gray-900", {
                        "border-destructive": form.formState.errors.email,
                      })}
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-destructive">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      {...form.register("message")}
                      placeholder="Hi there, I'd like to talk about..."
                      rows={5}
                      className={cn("min-h-[120px] bg-white dark:bg-gray-900", {
                        "border-destructive": form.formState.errors.message,
                      })}
                    />
                    {form.formState.errors.message && (
                      <p className="text-sm text-destructive">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit button */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="pt-2"
                  >
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message <FiSend className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
