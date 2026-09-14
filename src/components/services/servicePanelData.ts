import {
  Shield, Eye, Lock, Search, Cloud, Settings,
  Camera, HardDrive, Wrench, Scale,
  DollarSign, ArrowLeftRight, Users, Headphones,
  Monitor, TrendingUp, Server, Activity
} from "lucide-react";
import type { ServicePanelData } from "./ServicePanel";

export const panelData: Record<string, ServicePanelData> = {
  networking: {
    stats: [
      { value: "60%", label: "of small businesses close within 6 months of a cyberattack" },
      { value: "43%", label: "of all cyberattacks specifically target small businesses" },
      { value: "$120K+", label: "average cost of a single data breach for a small business" },
    ],
    deliverables: [
      "Ubiquiti UniFi Network Installation",
      "Advanced Firewall Protection",
      "24/7 Network Monitoring",
      "Secure Wi-Fi & VPN Solutions",
      "Vulnerability Assessments",
      "Data Encryption & Backups",
    ],
    features: [
      { icon: Shield, name: "Advanced Firewall", description: "Enterprise-grade threat protection for your network." },
      { icon: Eye, name: "24/7 Monitoring", description: "Round-the-clock surveillance of network health." },
      { icon: Lock, name: "Secure Wi-Fi & VPN", description: "Encrypted connections for on-site and remote teams." },
      { icon: Search, name: "Vulnerability Testing", description: "Proactive scans to find and fix weak points." },
      { icon: Cloud, name: "Cloud & Remote Protection", description: "Secure access from anywhere, on any device." },
      { icon: Settings, name: "Custom Security Strategies", description: "Tailored plans built for your business needs." },
    ],
  },
  security: {
    stats: [
      { value: "4×", label: "less likely to be burglarized with a professional camera system" },
      { value: "75%", label: "reduction in internal theft with monitored surveillance" },
      { value: "60%", label: "of small businesses experience theft or break-ins" },
    ],
    deliverables: [
      "UniFi Protect System Design",
      "Professional Camera Installation",
      "Remote Viewing Setup",
      "Motion Detection & Alerts",
      "Secure Video Storage (Local/Cloud)",
      "Ongoing System Maintenance",
    ],
    features: [
      { icon: Camera, name: "High-Definition Video", description: "Crystal-clear footage, day and night." },
      { icon: Cloud, name: "Remote Access", description: "View your cameras from anywhere in the world." },
      { icon: Activity, name: "Smart Motion Alerts", description: "Instant notifications when activity is detected." },
      { icon: HardDrive, name: "Secure Local Storage", description: "On-site recording with tamper protection." },
      { icon: Wrench, name: "Pro Installation", description: "Expert placement for maximum coverage." },
      { icon: Scale, name: "Scalable Solutions", description: "Easily add cameras as your business grows." },
    ],
  },
  cloud: {
    stats: [
      { value: "80%", label: "of data breaches are caused by human error" },
      { value: "40%", label: "cost reduction with flat-fee managed IT services" },
      { value: "$10K+", label: "average cost per hour of unplanned downtime" },
    ],
    deliverables: [
      "Microsoft 365 & Google Workspace Setup",
      "Enterprise-Grade Cybersecurity",
      "24/7 Help Desk for Cloud",
      "Strategic IT Guidance",
      "Seamless Cloud Migrations",
      "Automated Cloud Backups",
    ],
    features: [
      { icon: DollarSign, name: "Predictable Costs", description: "Flat monthly fees with no surprise bills." },
      { icon: Shield, name: "Enhanced Security", description: "Multi-layer protection for cloud environments." },
      { icon: ArrowLeftRight, name: "Scalable Resources", description: "Grow your cloud infrastructure on demand." },
      { icon: Cloud, name: "Data Resilience", description: "Automated backups and disaster recovery." },
      { icon: Users, name: "Seamless Collaboration", description: "Tools that keep your team connected." },
      { icon: Headphones, name: "24/7 Support", description: "Expert help whenever you need it." },
    ],
  },
  multisite: {
    stats: [
      { value: "140K", label: "hard drives fail every single week across businesses" },
      { value: "40%", label: "cost reduction with centralized managed services" },
      { value: "$10K+", label: "average cost per hour of downtime per location" },
    ],
    deliverables: [
      "Centralized Monitoring for All Locations",
      "Unified Help Desk Support",
      "Standardized Security Policies",
      "Data Backup & Recovery for All Sites",
      "Strategic IT Planning for Growth",
      "Vendor Management Across Locations",
    ],
    features: [
      { icon: Monitor, name: "Proactive Monitoring", description: "Real-time visibility across every site." },
      { icon: Cloud, name: "Data Backup & Recovery", description: "Redundant backups for all locations." },
      { icon: Shield, name: "Unified Network Security", description: "One security standard, everywhere." },
      { icon: TrendingUp, name: "Scalability", description: "Add new locations without added complexity." },
      { icon: Server, name: "Cloud Services", description: "Centralized cloud infrastructure management." },
      { icon: Headphones, name: "24/7 Central Support", description: "One number to call for every location." },
    ],
  },
};
