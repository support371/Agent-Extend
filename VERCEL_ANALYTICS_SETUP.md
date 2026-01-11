# Getting Started with Vercel Web Analytics

This guide will help you get started with using Vercel Web Analytics on the Agent-Extend project, showing you how to enable it, verify the setup, deploy your app to Vercel, and view your data in the dashboard.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Current Setup](#current-setup)
- [Enable Web Analytics in Vercel](#enable-web-analytics-in-vercel)
- [Verify the Installation](#verify-the-installation)
- [Deploy Your App to Vercel](#deploy-your-app-to-vercel)
- [View Your Data in the Dashboard](#view-your-data-in-the-dashboard)
- [Understanding the Implementation](#understanding-the-implementation)
- [Next Steps](#next-steps)

## Prerequisites

- A Vercel account. If you don't have one, you can [sign up for free](https://vercel.com/signup).
- A Vercel project. If you don't have one, you can [create a new project](https://vercel.com/new).
- The Vercel CLI installed. If you don't have it, you can install it using the following command:

```bash
# Using pnpm (recommended for this project)
pnpm i vercel

# Or using npm
npm i vercel

# Or using yarn
yarn i vercel

# Or using bun
bun i vercel
```

## Current Setup

The `@vercel/analytics` package is already installed in this project and configured for React. The Analytics component has been integrated into the main App component to automatically track page views and user interactions.

**Package.json:**
```json
{
  "dependencies": {
    "@vercel/analytics": "^1.4.0",
    ...
  }
}
```

**Client/src/App.tsx:**
The Analytics component is imported and placed at the end of the component tree for optimal tracking:

```tsx
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
          <Analytics />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
```

## Enable Web Analytics in Vercel

### Step 1: Access Your Project Dashboard

1. Go to the [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project (Agent-Extend or similar)
3. Click the **Analytics** tab
4. Click **Enable** from the dialog

> **💡 Note:** Enabling Web Analytics will add new routes (scoped at `/_vercel/insights/*`) after your next deployment.

### Step 2: Verify Prerequisites

Make sure you have:
- The `@vercel/analytics` package installed (✓ Already done in this project)
- The Analytics component imported in your main app file (✓ Already configured)
- A Vercel account connected to your project

## Verify the Installation

To verify that Vercel Analytics is correctly set up:

### 1. Check Browser Network Tab

When you visit any page of your application:

1. Open Developer Tools (F12 or Right-click → Inspect)
2. Go to the **Network** tab
3. Filter by "insights" or look for requests to `/_vercel/insights/view`
4. You should see Fetch/XHR requests being sent to this endpoint

This confirms that the Analytics script is working and sending data to Vercel.

### 2. Build and Test Locally

```bash
# Install dependencies if not already done
pnpm install

# Build the project
pnpm build

# Start development server
pnpm dev
```

## Deploy Your App to Vercel

### Option 1: Using Git (Recommended)

1. Connect your repository to Vercel:
   ```bash
   vercel link
   ```

2. Push your changes to main:
   ```bash
   git add .
   git commit -m "Set up Vercel Web Analytics"
   git push origin main
   ```

3. Vercel will automatically deploy your changes

### Option 2: Using the CLI

Deploy your app using the following command:

```bash
vercel deploy
```

### What Happens During Deployment

- Vercel enables the Analytics routes (`/_vercel/insights/*`)
- The Analytics component starts collecting data immediately
- Page views and user interactions are tracked
- Custom events (if configured) are recorded

> **💡 Note:** If everything is set up properly, you should be able to see a Fetch/XHR request in your browser's Network tab from `/_vercel/insights/view` when you visit any page after deployment.

## View Your Data in the Dashboard

Once your app is deployed, and users have visited your site, you can view your data in the dashboard:

### Accessing Analytics

1. Go to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. You'll see:
   - Real-time visitor counts
   - Page views by URL
   - Top pages by traffic
   - Geographic distribution
   - Device and browser information

### Understanding Your Metrics

**Key Metrics:**
- **Visitors**: Unique users who visited your site
- **Page Views**: Total number of page loads
- **Top Pages**: Most visited URLs on your site
- **Real-time Data**: Live visitor activity (updates every 30 seconds)

### Filtering Your Data

After a few days of visitors, you'll be able to start exploring your data by viewing and filtering the panels. You can filter by:
- Date range
- Page path
- Geographic region
- Device type
- Browser type

## Understanding the Implementation

### How Analytics Works in This Project

1. **Component Import**: The Analytics component is imported from `@vercel/analytics/react`
2. **Placement**: It's placed at the end of the component tree to ensure all routes are tracked
3. **Automatic Tracking**: The component automatically:
   - Tracks page views when routes change
   - Captures Core Web Vitals
   - Records custom events (if implemented)

### Route Detection

Since this project uses `wouter` for routing, the Analytics component automatically detects route changes and attributes page views correctly.

### Configuration

The current implementation uses default settings. The Analytics component can be customized if needed:

```tsx
// Example: Custom analytics configuration
<Analytics debug={true} /> // Enable debug mode for development
```

## Custom Events (Optional)

To track custom user interactions like button clicks or form submissions:

```tsx
import { track } from "@vercel/analytics";

// In your component
function handleAction() {
  track("custom_event_name", {
    property1: "value1",
    property2: "value2",
  });
}
```

Example implementations:
- Button clicks
- Form submissions
- Feature usage
- Conversion events
- User interactions

## Privacy and Data Compliance

Vercel Web Analytics:
- Does not use cookies
- Does not collect personal data
- Is GDPR compliant
- Is CCPA compliant
- Works with privacy-first consent tools

Learn more about [Vercel Web Analytics privacy policy](/docs/analytics/privacy-policy)

## Next Steps

Now that you have Vercel Web Analytics set up, you can:

1. **Monitor Performance**: Watch for trends and anomalies in real-time
2. **Identify Top Pages**: See which content resonates most with your audience
3. **Track Conversions**: Add custom events to track important user actions
4. **Optimize User Experience**: Use geographic and device data to optimize for your users
5. **Export Data**: Download analytics data for reporting and analysis

## Troubleshooting

### No Analytics Data Appearing

1. **Verify Deployment**: Ensure your app is deployed to Vercel (not running locally)
2. **Check Network**: Look for `/_vercel/insights/view` requests in the Network tab
3. **Wait for Data**: Analytics data can take a few minutes to appear in the dashboard
4. **Enable Analytics**: Make sure Web Analytics is enabled in your project settings

### Missing Page Views

- Ensure the Analytics component is placed in your main app component
- Verify that the component is not conditionally rendered
- Check that your routing library is supported (wouter is supported)

### Custom Events Not Recording

- Verify the syntax of your custom event calls
- Check the browser console for any errors
- Ensure `track()` is called after the Analytics component mounts

## Additional Resources

- [Vercel Web Analytics Documentation](/docs/analytics)
- [@vercel/analytics Package Documentation](/docs/analytics/package)
- [Custom Events Guide](/docs/analytics/custom-events)
- [Filtering Data](/docs/analytics/filtering)
- [Analytics Limits and Pricing](/docs/analytics/limits-and-pricing)

## Support

For issues or questions:
- Check the [Vercel Analytics Troubleshooting Guide](/docs/analytics/troubleshooting)
- Visit the [Vercel Community](https://vercel.com/community)
- Contact [Vercel Support](https://vercel.com/support)
