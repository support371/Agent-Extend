import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, timestamp, jsonb, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const userRoleEnum = pgEnum("user_role", [
  "public",
  "registered",
  "verified_buyer",
  "verified_seller",
  "compliance_admin",
  "super_admin",
  "institutional_account"
]);

export const verificationStatusEnum = pgEnum("verification_status", [
  "pending",
  "under_review",
  "approved",
  "rejected",
  "suspended"
]);

export const documentStatusEnum = pgEnum("document_status", [
  "draft",
  "submitted",
  "under_review",
  "needs_action",
  "approved",
  "expired"
]);

export const listingStatusEnum = pgEnum("listing_status", [
  "draft",
  "pending_review",
  "approved",
  "rejected",
  "sold",
  "withdrawn"
]);

export const shipmentStatusEnum = pgEnum("shipment_status", [
  "quote_requested",
  "quote_provided",
  "documents_pending",
  "documents_approved",
  "booking_confirmed",
  "in_transit",
  "customs_clearance",
  "delivered",
  "cancelled"
]);

export const careLevelEnum = pgEnum("care_level", [
  "beginner",
  "intermediate",
  "advanced",
  "expert"
]);

export const categoryEnum = pgEnum("category", [
  "livestock",
  "companion",
  "aquaculture",
  "captive_bred_specialty",
  "conservation",
  "research"
]);

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  role: userRoleEnum("role").default("registered").notNull(),
  region: text("region"),
  verificationStatus: verificationStatusEnum("verification_status").default("pending").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const sellerProfiles = pgTable("seller_profiles", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  businessName: text("business_name").notNull(),
  businessType: text("business_type").notNull(),
  licenseNumber: text("license_number"),
  permitReferences: jsonb("permit_references"),
  auditStatus: verificationStatusEnum("audit_status").default("pending").notNull(),
  description: text("description"),
  country: text("country").notNull(),
  verifiedAt: timestamp("verified_at"),
});

export const buyerProfiles = pgTable("buyer_profiles", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  purposeOfPurchase: text("purpose_of_purchase").notNull(),
  readinessAcknowledgments: jsonb("readiness_acknowledgments"),
  destinationCountry: text("destination_country").notNull(),
  facilityDescription: text("facility_description"),
  verifiedAt: timestamp("verified_at"),
});

export const animalSpecies = pgTable("animal_species", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  commonName: text("common_name").notNull(),
  scientificName: text("scientific_name").notNull(),
  category: categoryEnum("category").notNull(),
  careLevel: careLevelEnum("care_level").notNull(),
  description: text("description"),
  welfareNotes: text("welfare_notes"),
  careGuidance: text("care_guidance"),
  imageUrl: text("image_url"),
});

export const listings = pgTable("listings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  speciesId: varchar("species_id").notNull().references(() => animalSpecies.id),
  sellerId: varchar("seller_id").notNull().references(() => sellerProfiles.id),
  title: text("title").notNull(),
  description: text("description"),
  originCountry: text("origin_country").notNull(),
  quantity: integer("quantity").default(1).notNull(),
  price: integer("price"),
  status: listingStatusEnum("status").default("draft").notNull(),
  healthDocStatus: documentStatusEnum("health_doc_status").default("draft").notNull(),
  verificationBadges: jsonb("verification_badges"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  approvedAt: timestamp("approved_at"),
});

export const acquisitionCases = pgTable("acquisition_cases", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  buyerId: varchar("buyer_id").notNull().references(() => buyerProfiles.id),
  listingId: varchar("listing_id").notNull().references(() => listings.id),
  complianceState: text("compliance_state").default("eligibility_check").notNull(),
  paymentState: text("payment_state").default("pending").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const documents = pgTable("documents", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  ownerType: text("owner_type").notNull(),
  ownerId: varchar("owner_id").notNull(),
  documentType: text("document_type").notNull(),
  fileName: text("file_name").notNull(),
  fileUrl: text("file_url"),
  status: documentStatusEnum("status").default("draft").notNull(),
  expiryDate: timestamp("expiry_date"),
  notes: text("notes"),
  uploadedAt: timestamp("uploaded_at").defaultNow().notNull(),
  reviewedAt: timestamp("reviewed_at"),
});

export const shipments = pgTable("shipments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  acquisitionCaseId: varchar("acquisition_case_id").references(() => acquisitionCases.id),
  originCountry: text("origin_country").notNull(),
  destinationCountry: text("destination_country").notNull(),
  route: jsonb("route"),
  welfarePlanId: varchar("welfare_plan_id"),
  status: shipmentStatusEnum("status").default("quote_requested").notNull(),
  estimatedDeparture: timestamp("estimated_departure"),
  estimatedArrival: timestamp("estimated_arrival"),
  actualDeparture: timestamp("actual_departure"),
  actualArrival: timestamp("actual_arrival"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const welfareCheckpoints = pgTable("welfare_checkpoints", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  shipmentId: varchar("shipment_id").notNull().references(() => shipments.id),
  checkpointType: text("checkpoint_type").notNull(),
  location: text("location"),
  conditionNotes: text("condition_notes"),
  temperature: text("temperature"),
  passed: boolean("passed").default(true).notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export const countryRules = pgTable("country_rules", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  countryCode: text("country_code").notNull().unique(),
  countryName: text("country_name").notNull(),
  allowedCategories: jsonb("allowed_categories").notNull(),
  restrictedCategories: jsonb("restricted_categories"),
  requiredDocTypes: jsonb("required_doc_types").notNull(),
  specialNotes: text("special_notes"),
  isActive: boolean("is_active").default(true).notNull(),
});

export const auditLogs = pgTable("audit_logs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  actorId: varchar("actor_id").references(() => users.id),
  action: text("action").notNull(),
  entityType: text("entity_type").notNull(),
  entityId: varchar("entity_id"),
  details: jsonb("details"),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export const inquiries = pgTable("inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  type: text("type").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  organization: text("organization"),
  message: text("message").notNull(),
  status: text("status").default("new").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});
export const insertSellerProfileSchema = createInsertSchema(sellerProfiles).omit({
  id: true,
  verifiedAt: true,
});
export const insertBuyerProfileSchema = createInsertSchema(buyerProfiles).omit({
  id: true,
  verifiedAt: true,
});
export const insertAnimalSpeciesSchema = createInsertSchema(animalSpecies).omit({
  id: true,
});
export const insertListingSchema = createInsertSchema(listings).omit({
  id: true,
  createdAt: true,
  approvedAt: true,
});
export const insertAcquisitionCaseSchema = createInsertSchema(acquisitionCases).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export const insertDocumentSchema = createInsertSchema(documents).omit({
  id: true,
  uploadedAt: true,
  reviewedAt: true,
});
export const insertShipmentSchema = createInsertSchema(shipments).omit({
  id: true,
  createdAt: true,
});
export const insertWelfareCheckpointSchema = createInsertSchema(welfareCheckpoints).omit({
  id: true,
  timestamp: true,
});
export const insertCountryRuleSchema = createInsertSchema(countryRules).omit({
  id: true,
});
export const insertAuditLogSchema = createInsertSchema(auditLogs).omit({
  id: true,
  timestamp: true,
});
export const insertInquirySchema = createInsertSchema(inquiries).omit({
  id: true,
  createdAt: true,
  status: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertSellerProfile = z.infer<typeof insertSellerProfileSchema>;
export type SellerProfile = typeof sellerProfiles.$inferSelect;
export type InsertBuyerProfile = z.infer<typeof insertBuyerProfileSchema>;
export type BuyerProfile = typeof buyerProfiles.$inferSelect;
export type InsertAnimalSpecies = z.infer<typeof insertAnimalSpeciesSchema>;
export type AnimalSpecies = typeof animalSpecies.$inferSelect;
export type InsertListing = z.infer<typeof insertListingSchema>;
export type Listing = typeof listings.$inferSelect;
export type InsertAcquisitionCase = z.infer<typeof insertAcquisitionCaseSchema>;
export type AcquisitionCase = typeof acquisitionCases.$inferSelect;
export type InsertDocument = z.infer<typeof insertDocumentSchema>;
export type Document = typeof documents.$inferSelect;
export type InsertShipment = z.infer<typeof insertShipmentSchema>;
export type Shipment = typeof shipments.$inferSelect;
export type InsertWelfareCheckpoint = z.infer<typeof insertWelfareCheckpointSchema>;
export type WelfareCheckpoint = typeof welfareCheckpoints.$inferSelect;
export type InsertCountryRule = z.infer<typeof insertCountryRuleSchema>;
export type CountryRule = typeof countryRules.$inferSelect;
export type InsertAuditLog = z.infer<typeof insertAuditLogSchema>;
export type AuditLog = typeof auditLogs.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;
