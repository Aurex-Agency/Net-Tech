import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import supportImage from "@/assets/support_call.png";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [smsConsent, setSmsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    setContactForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
            Get In Touch
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to talk? Give us a call, send an email, or fill out the form below. We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <form onSubmit={handleContactSubmit} className="bg-card rounded-xl p-6 sm:p-8 border border-border space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-bold text-foreground mb-1.5 block">Name</label>
                  <Input value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} placeholder="Your name" required />
                </div>
                <div>
                  <label className="text-sm font-bold text-foreground mb-1.5 block">Email</label>
                  <Input type="email" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} placeholder="you@business.com" required />
                </div>
              </div>
              <div>
                <label className="text-sm font-bold text-foreground mb-1.5 block">Phone <span className="text-destructive">*</span></label>
                <Input type="tel" value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} placeholder="(662) 555-0000" required />
              </div>
              <div>
                <label className="text-sm font-bold text-foreground mb-1.5 block">How can we help?</label>
                <Textarea value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} placeholder="Tell us about your IT needs..." rows={5} required />
              </div>

              {/* A2P Compliant SMS Consent */}
              <div className="space-y-3 border border-border rounded-lg p-4 bg-muted/30">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="sms-consent"
                    checked={smsConsent}
                    onCheckedChange={(checked) => setSmsConsent(checked === true)}
                  />
                  <Label htmlFor="sms-consent" className="text-sm leading-relaxed font-normal cursor-pointer">
                    I consent to receive transactional messages from <strong>Net-Tech</strong> at the phone number provided. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                  </Label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="marketing-consent"
                    checked={marketingConsent}
                    onCheckedChange={(checked) => setMarketingConsent(checked === true)}
                  />
                  <Label htmlFor="marketing-consent" className="text-sm leading-relaxed font-normal cursor-pointer">
                    I consent to receive marketing and promotional messages from Net-Tech at the phone number provided. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                  </Label>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                <a href="/privacy-policy" className="underline hover:text-primary transition-colors">Privacy Policy</a>
                {" | "}
                <a href="/terms-of-service" className="underline hover:text-primary transition-colors">Terms of Service</a>
              </p>
            </form>
          </motion.div>

          {/* Info + Image */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-8">
            <div className="rounded-xl overflow-hidden">
              <img src={supportImage} alt="Net-Tech support team" className="w-full h-48 sm:h-56 object-cover" />
            </div>
            <div className="space-y-5">
              <a href="tel:+16625397787" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><Phone className="w-5 h-5 text-primary" /></div>
                <div><p className="text-sm text-muted-foreground">Call us</p><p className="font-bold text-foreground group-hover:text-primary transition-colors">(662) 539-7787</p></div>
              </a>
              <a href="mailto:support@nettech.ms" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><Mail className="w-5 h-5 text-primary" /></div>
                <div><p className="text-sm text-muted-foreground">Email us</p><p className="font-bold text-foreground group-hover:text-primary transition-colors">support@nettech.ms</p></div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><MapPin className="w-5 h-5 text-primary" /></div>
                <div><p className="text-sm text-muted-foreground">Visit us</p><p className="font-bold text-foreground">112 W Main St, New Albany, MS 38652</p></div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <iframe title="Net-Tech Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.5!2d-89.0078!3d34.4943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDI5JzM5LjUiTiA4OcKwMDAnMjguMSJX!5e0!3m2!1sen!2sus!4v1" width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
