import {
  Code2, Brain, Shield, Cloud, Lightbulb, Layers, RefreshCw, GitBranch,
  Building2, Users, Monitor, Sparkles, GraduationCap, Landmark, Wallet,
  HeartPulse, Laptop, ShieldCheck, TrendingUp, Cpu, Target, MessageSquare,
  HeartHandshake, KeyRound, UserCog, Globe, Lock, FileText, Server, Eye,
  Activity, ArrowRight, Database,
} from 'lucide-react';

const iconMap = {
  Code2, Brain, Shield, Cloud, Lightbulb, Layers, RefreshCw, GitBranch,
  Building2, Users, Monitor, Sparkles, GraduationCap, Landmark, Wallet,
  HeartPulse, Laptop, ShieldCheck, TrendingUp, Cpu, Target, MessageSquare,
  HeartHandshake, KeyRound, UserCog, Globe, Lock, FileText, Server, Eye,
  Activity, ArrowRight, Database,
};

export function getIcon(name) {
  return iconMap[name] || Code2;
}
