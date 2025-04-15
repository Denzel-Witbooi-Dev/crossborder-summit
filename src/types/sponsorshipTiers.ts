
export type SponsorshipTier = "starsAndStripes" | "platinum" | "gold" | "silver" | "bronze";

export interface TierBenefit {
  title: string;
  value: string | boolean;
  icon?: string;
}

export interface SponsorshipPackage {
  name: string;
  tier: SponsorshipTier;
  price: string;
  benefits: TierBenefit[];
  highlightFeature?: string;
}

export const sponsorshipPackages: SponsorshipPackage[] = [
  {
    name: "Stars & Stripes",
    tier: "starsAndStripes",
    price: "R250,000",
    highlightFeature: "Cocktail Dinner Sponsorship",
    benefits: [
      { title: "Exhibition Booth", value: "6m x 3m" },
      { title: "Speaking Opportunity", value: "Plenary (10 min)" },
      { title: "Company Profile", value: "150 words" },
      { title: "Marketing Collateral", value: true },
      { title: "Prospectus Advertisement", value: "Full Page" },
      { title: "Pull-Up Banners", value: "2 in Plenary" },
      { title: "Corporate Video", value: "2 min slot" },
      { title: "Social Media Presence", value: "Multiple Mentions" },
      { title: "Website Branding Duration", value: "4 Months" },
      { title: "Delegate Gift Inclusion", value: "Gift & Brochure" },
      { title: "MSME Attendee List Access", value: true },
      { title: "Staff Passes", value: "5" }
    ]
  },
  {
    name: "Platinum",
    tier: "platinum",
    price: "R150,000",
    highlightFeature: "B2B Area Sponsorship",
    benefits: [
      { title: "Exhibition Booth", value: "6m x 3m" },
      { title: "Speaking Opportunity", value: "Breakaway (5 min)" },
      { title: "Company Profile", value: "100 words" },
      { title: "Marketing Collateral", value: true },
      { title: "Prospectus Advertisement", value: "Half Page" },
      { title: "Pull-Up Banners", value: "2 in Registration" },
      { title: "Social Media Presence", value: true },
      { title: "Website Branding Duration", value: "3 Months" },
      { title: "Delegate Gift Inclusion", value: true },
      { title: "MSME Attendee List Access", value: true },
      { title: "Staff Passes", value: "4" }
    ]
  },
  {
    name: "Gold",
    tier: "gold",
    price: "R100,000",
    benefits: [
      { title: "Exhibition Booth", value: "3m x 3m" },
      { title: "Company Profile", value: "80 words" },
      { title: "Marketing Collateral", value: true },
      { title: "Prospectus Advertisement", value: "Quarter Page" },
      { title: "Pull-Up Banners", value: "1 in Registration" },
      { title: "Social Media Presence", value: true },
      { title: "Website Branding Duration", value: "2 Months" },
      { title: "Staff Passes", value: "3" }
    ]
  },
  {
    name: "Silver",
    tier: "silver",
    price: "R50,000",
    benefits: [
      { title: "Exhibition Booth", value: "3m x 3m" },
      { title: "Company Profile", value: "50 words" },
      { title: "Marketing Collateral", value: true },
      { title: "Prospectus Advertisement", value: "Strip Ad" },
      { title: "Pull-Up Banners", value: "1 in Shared Area" },
      { title: "Social Media Presence", value: true },
      { title: "Website Branding Duration", value: "1 Month" },
      { title: "Staff Passes", value: "2" }
    ]
  },
  {
    name: "Bronze",
    tier: "bronze",
    price: "R25,000",
    benefits: [
      { title: "Exhibition Space", value: "Shared Booth" },
      { title: "Company Profile", value: "40 words" },
      { title: "Marketing Collateral", value: true },
      { title: "Pull-Up Banners", value: "1 in Shared Area" },
      { title: "Social Media Presence", value: "1 mention on the day" },
      { title: "Website Branding Duration", value: "2 Weeks" },
      { title: "Staff Passes", value: "1" }
    ]
  }
];
