import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const supportSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  businessName: z.string().trim().min(1, "Business name is required").max(100),
  phoneNumber: z.string().trim().min(1, "Phone number is required").max(30),
  email: z.string().trim().email("Invalid email address").max(255),
  issueType: z.string().min(1, "Please select an issue type"),
  description: z.string().trim().min(1, "Description is required").max(2000),
});

type SupportFormValues = z.infer<typeof supportSchema>;

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/ErZnn0dKKTqWAnjTnzaP/webhook-trigger/1f29b918-a9b2-4aa9-9338-bf9344887baf";

const Support = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<SupportFormValues>({
    resolver: zodResolver(supportSchema),
    defaultValues: {
      fullName: "",
      businessName: "",
      phoneNumber: "",
      email: "",
      issueType: "",
      description: "",
    },
  });

  const onSubmit = async (data: SupportFormValues) => {
    setSubmitting(true);
    try {
      const formBody = new URLSearchParams();
      formBody.append("full_name", data.fullName);
      formBody.append("business_name", data.businessName);
      formBody.append("phone", data.phoneNumber);
      formBody.append("email", data.email);
      formBody.append("issue_type", data.issueType);
      formBody.append("description", data.description);

      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody.toString(),
        mode: "no-cors",
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6"
          >
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Ticket Submitted
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Thank you! Our team has received your support request and will
              respond as soon as possible.
            </p>
            <Button variant="outline" onClick={() => setSubmitted(false)}>
              Submit Another Ticket
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 space-y-2"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">
            Click the button below to install remote support services
          </p>
          <Button asChild size="lg" className="gap-2 font-bold">
            <a href="https://sos.splashtop.com/" target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4" />
              Remote Access Client
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Existing Client
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Customer Support
          </h1>
          <p className="text-muted-foreground">
            Describe your issue below and our team will get back to you
            promptly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-lg border border-border bg-card p-6 md:p-8"
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField control={form.control} name="fullName" render={({ field }) => (<FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>)} />
                <FormField control={form.control} name="businessName" render={({ field }) => (<FormItem><FormLabel>Business Name</FormLabel><FormControl><Input placeholder="Acme Corp" {...field} /></FormControl><FormMessage /></FormItem>)} />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField control={form.control} name="phoneNumber" render={({ field }) => (<FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input type="tel" placeholder="(555) 123-4567" {...field} /></FormControl><FormMessage /></FormItem>)} />
                <FormField control={form.control} name="email" render={({ field }) => (<FormItem><FormLabel>Email Address</FormLabel><FormControl><Input type="email" placeholder="john@acme.com" {...field} /></FormControl><FormMessage /></FormItem>)} />
              </div>
              <FormField control={form.control} name="issueType" render={({ field }) => (
                <FormItem>
                  <FormLabel>Issue Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl><SelectTrigger><SelectValue placeholder="Select an issue type" /></SelectTrigger></FormControl>
                    <SelectContent>
                      <SelectItem value="Computer">Computer</SelectItem>
                      <SelectItem value="Phone">Phone</SelectItem>
                      <SelectItem value="Copier">Copier</SelectItem>
                      <SelectItem value="Internet">Internet</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="description" render={({ field }) => (<FormItem><FormLabel>Description</FormLabel><FormControl><Textarea placeholder="Describe your issue in detail..." rows={5} {...field} /></FormControl><FormMessage /></FormItem>)} />
              <Button type="submit" size="lg" className="w-full gap-2" disabled={submitting}>
                {submitting ? "Submitting…" : "Submit Ticket"}
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default Support;
