import {
  Archive,
  AudioWaveform,
  BookOpen,
  Bot,
  Building2,
  CalendarRange,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  MonitorPlay,
  PieChart,
  ScrollText,
  SquareAsterisk,
  SquareTerminal,
  Store,
  TrendingUp,
  Warehouse,
} from "lucide-react"
import * as React from "react"

import { NavMain } from "@/aConnection/bShadcnConnection/components/nav-main"
import { NavUser } from "@/aConnection/bShadcnConnection/components/nav-user"
// import { TeamSwitcher } from "@/aConnection/bShadcnConnection/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/aConnection/bShadcnConnection/components/ui/sidebar"
import fullRoute from "@/bLove/gRoute/bFullRoute"
import BrandLogo from "@/bLove/hAsset/BrandLogo/BrandLogo.png"
import { Link } from "react-router-dom"
import { cn } from "../lib/utils"


// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "InvenTech",
      logo: GalleryVerticalEnd,
      plan: "Brand",
    },
    {
      name: "InvenTech",
      logo: AudioWaveform,
      plan: "Company",
    },
    {
      name: "InvenTech",
      logo: Command,
      plan: "Company",
    },
  ],

  forDashboard: [
    {
      title: "Dashboards",
      url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.zDashboardRoute.aDashboardRoute,
      icon: BookOpen,
      isActive: false,
      items: [
        {
          title: "Inventech Dashboard",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.zDashboardRoute.aDashboardRoute,
        },
      ],
    },
  ],

  forInvenTech: [
    {
      title: "Product Catalogue",
      url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.aProductCatalogueRoute.aListRoute,
      icon: SquareAsterisk,
      isActive: false,
      isCollapsible: false,
      items: [],
    },
    {
      title: "Inventory & Stock",
      url: "#",
      icon: Archive,
      isActive: false,
      isCollapsible: true,
      items: [
        {
          title: "General",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.kInventoryGeneralRoute.aListRoute,
        },
        {
          title: "Inward",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.lInventoryInwardRoute.aListRoute,
        },
        {
          title: "Outward",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.mInventoryOutwardRoute.aListRoute,
        },
      ],
    },
    {
      title: "Reports",
      url: "#",
      icon: TrendingUp,
      isActive: false,
      isCollapsible: false,
      items: [],
    },
    {
      title: "Customer Orders",
      url: "#",
      icon: MonitorPlay,
      isActive: false,
      isCollapsible: true,
      items: [
        {
          title: "Received from Magneto",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.nCustomerOrderMagnetoRoute.aListRoute,
        },
        {
          title: "Pushed to Shopify",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.oCustomerOrderShopifyRoute.aListRoute,
        },
      ],
    },
    {
      title: "Purchase Orders",
      url: "#",
      icon: CalendarRange,
      isActive: false,
      isCollapsible: true,
      items: [
        {
          title: "Open",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.gOpenPurchaseOrderRoute.aListRoute,
        },
        {
          title: "Closed",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.jClosedPurchaseOrderRoute.aListRoute,
        },
      ],
    },
    {
      title: "Warehouse Management",
      url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.bWarehouseManagementRoute.aListRoute,
      icon: Warehouse,
      isActive: false,
      isCollapsible: false,
      items: [],
    },
    {
      title: "Store Management",
      url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.cStoreManagementRoute.aListRoute,
      icon: Store,
      isActive: false,
      isCollapsible: false,
      items: [],
    },
    {
      title: "My Organization",
      url: "#",
      icon: Building2,
      isActive: false,
      isCollapsible: true,
      items: [
        {
          title: "Location",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.eLocationRoute.aListRoute,
        },
        {
          title: "Departments",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.fDepartmentRoute.aListRoute,
        },
        {
          title: "Employees",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.iEmployeeRoute.aListRoute,
        },
        {
          title: "Role",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.hOrganizationRoleRoute.aListRoute,
        },
      ],
    },
    {
      title: "Activity Log",
      url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.dActivityLogRoute.aListRoute,
      icon: ScrollText,
      isActive: false,
      isCollapsible: false,
      items: [],
    },
  ],

  forAdministration: [
    {
      title: "User Administration",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "User",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.aUserRoute.aListRoute,
        },
        {
          title: "Role",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.bRoleRoute.aListRoute,
        },
        {
          title: "Menu",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.cMenuRoute.aListRoute,
        },
      ],
    },
    // {
    //   title: "Playground",
    //   url: "#",
    //   icon: SquareTerminal,
    //   items: [
    //     {
    //       title: "History",
    //       url: "#",
    //     },
    //     {
    //       title: "Starred",
    //       url: "#",
    //     },
    //     {
    //       title: "Settings",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Models",
    //   url: "#",
    //   icon: Bot,
    //   items: [
    //     {
    //       title: "Genesis",
    //       url: "#",
    //     },
    //     {
    //       title: "Explorer",
    //       url: "#",
    //     },
    //     {
    //       title: "Quantum",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Documentation",
    //   url: "#",
    //   icon: BookOpen,
    //   items: [
    //     {
    //       title: "Introduction",
    //       url: "#",
    //     },
    //     {
    //       title: "Get Started",
    //       url: "#",
    //     },
    //     {
    //       title: "Tutorials",
    //       url: "#",
    //     },
    //     {
    //       title: "Changelog",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "General",
    //       url: "#",
    //     },
    //     {
    //       title: "Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Billing",
    //       url: "#",
    //     },
    //     {
    //       title: "Limits",
    //       url: "#",
    //     },
    //   ],
    // },
  ],

  forDeveloper: [
    {
      title: "Base Setup",
      url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.aListRoute,
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "Base Many To One",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.aListRoute,
        },
        {
          title: "Base Many To Many",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.aListRoute,
        },
        {
          title: "Base",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.aListRoute,
        },
        {
          title: "Base One To One",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.aListRoute,
        },
        {
          title: "Base One To Many",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.aListRoute,
        },
      ],
    },
  ],


  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ReduxCall, APICall, navigate, ...props }: (React.ComponentProps<typeof Sidebar> & { ReduxCall?: any,APICall?: any, navigate?: any })) {
  // JSX
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to={fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute} >
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                  <img
                    src={BrandLogo}
                    alt={"BrandLogo"}
                    className={cn(
                      "h-[40px] object-fit transition-all hover:scale-105 w-auto hidden dark:block",
                      "aspect-square"
                    )}
                  />
                  <img
                    src={BrandLogo}
                    alt={"BrandLogo"}
                    className={cn(
                      "h-[40px] object-fit transition-all hover:scale-105 w-auto block dark:hidden",
                      "aspect-square"
                    )}
                  />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">InvenTech - Admin</span>
                  {/* <span className="">v1.0.0</span> */}
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain header="For Dashboard" items={data.forDashboard} />
        <NavMain header="For Inventech" items={data.forInvenTech} />
        {/* <NavMain header="For Administration" items={data.forAdministration} /> */}
        {/* <NavMain header="For Developer" items={data.forDeveloper} /> */}
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} ReduxCall={ReduxCall} APICall={APICall} navigate={navigate} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
