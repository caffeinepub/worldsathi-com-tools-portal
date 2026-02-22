# Specification

## Summary
**Goal:** Simplify the dashboard to show placeholder values and add admin functionality to reset user usage statistics.

**Planned changes:**
- Update Dashboard page to display placeholder values (0 or sensible defaults) for all usage metrics instead of incorrect values
- Create admin panel page with user selection and reset functionality for clearing usage statistics
- Add backend data structures to support future usage tracking (types and storage for usage records)
- Implement admin reset feature that clears all usage counts for selected users with confirmation dialog

**User-visible outcome:** Dashboard displays clean placeholder values until tracking is implemented. Admins can reset any user's usage statistics from a dedicated admin panel page.
