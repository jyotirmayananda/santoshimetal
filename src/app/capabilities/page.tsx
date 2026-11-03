import { Metadata } from 'next';
import { CapabilitiesContent } from '@/components/sections/CapabilitiesContent';

export const metadata: Metadata = {
  title: 'Capabilities | Santoshi Metal Industries Private Limited',
  description:
    'Aluminium Ingot, Aluminium Profile, Aluminium Scrap & Supply, Powder Coating, and Anodising capabilities from Santoshi Metal Industries in Odisha, India.',
};

export default function CapabilitiesPage() {
  return <CapabilitiesContent />;
}
