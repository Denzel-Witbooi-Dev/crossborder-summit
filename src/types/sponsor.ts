export type SponsorTier = "platinum" | "gold" | "silver" | "bronze";

export type Sponsor = {
  name: string;
  tier: SponsorTier;
  logoUrl: string;
  websiteUrl?: string;
};

export const sponsors: Sponsor[] = [
  {
    name: "TransAfrica Logistics",
    tier: "platinum",
    logoUrl: "/transport-logo.png",
    websiteUrl: "https://example.com/transafrica"
  },
  {
    name: "Southern African Development Bank",
    tier: "platinum",
    logoUrl: "/transport-logo.png",
    websiteUrl: "https://example.com/sadb"
  },
  {
    name: "Unity Transport Solutions",
    tier: "gold",
    logoUrl: "/transport-logo.png",
    websiteUrl: "https://example.com/unitytransport"
  },
  {
    name: "CrossBorder Tech",
    tier: "gold",
    logoUrl: "/transport-logo.png",
    websiteUrl: "https://example.com/crossbordertech"
  },
  {
    name: "African Trade Alliance",
    tier: "gold",
    logoUrl: "/transport-logo.png",
    websiteUrl: "https://example.com/ata"
  },
  {
    name: "Eco Freight Services",
    tier: "silver",
    logoUrl: "/transport-logo.png",
    websiteUrl: "https://example.com/ecofreight"
  },
  {
    name: "Regional Transport Association",
    tier: "silver",
    logoUrl: "/transport-logo.png",
    websiteUrl: "https://example.com/rta"
  },
  {
    name: "SafeRoads Initiative",
    tier: "silver",
    logoUrl: "/transport-logo.png",
    websiteUrl: "https://example.com/saferoads"
  },
  {
    name: "Customs Solutions",
    tier: "silver",
    logoUrl: "/transport-logo.png",
    websiteUrl: "https://example.com/customs"
  },
  {
    name: "Border Express",
    tier: "bronze",
    logoUrl: "/transport-logo.png",
    websiteUrl: "https://example.com/borderexpress"
  },
  {
    name: "Transport Innovation Hub",
    tier: "bronze",
    logoUrl: "/transport-logo.png",
    websiteUrl: "https://example.com/tih"
  },
  {
    name: "Logistics Training Academy",
    tier: "bronze",
    logoUrl: "/transport-logo.png"
  },
  {
    name: "African MSME Network",
    tier: "bronze",
    logoUrl: "/transport-logo.png"
  }
];
