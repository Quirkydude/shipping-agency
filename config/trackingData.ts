// config/trackingData.ts
// ─────────────────────────────────────────────
// Tracking data for package lookup
// Add real tracking entries here as they become available
// ─────────────────────────────────────────────

export interface TrackingHistoryEntry {
  date: string;
  location: string;
  status: string;
  description: string;
}

export interface TrackingEntry {
  /** Unique tracking code entered by the user */
  trackingCode: string;
  /** Current status of the package */
  status: string;
  /** Origin location */
  origin: string;
  /** Destination location */
  destination: string;
  /** Last update timestamp */
  lastUpdate: string;
  /** Estimated delivery date */
  estimatedDelivery: string;
  /** Full status history timeline */
  history: TrackingHistoryEntry[];
}

/**
 * Tracking data store.
 * Add entries here to make them searchable on the /tracking page.
 *
 * Example:
 * {
 *   trackingCode: "ASC-2024-001",
 *   status: "In Transit",
 *   origin: "New York, USA",
 *   destination: "Lagos, Nigeria",
 *   lastUpdate: "2024-03-15 10:30 AM",
 *   estimatedDelivery: "2024-03-22",
 *   history: [
 *     {
 *       date: "2024-03-15 10:30 AM",
 *       location: "New York, USA",
 *       status: "In Transit",
 *       description: "Package departed from sorting facility",
 *     },
 *   ],
 * }
 */
export const trackingData: TrackingEntry[] = [];
