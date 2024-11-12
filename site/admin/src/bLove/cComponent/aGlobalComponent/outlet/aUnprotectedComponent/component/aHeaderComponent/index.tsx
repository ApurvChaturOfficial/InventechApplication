import React from "react"
import { useDispatch, useSelector } from "react-redux"
import globalSlice from "@/bLove/bRedux/aGlobalSlice"
import { RootState } from "@/aConnection/dReduxConnection"
import { Link, useNavigate } from "react-router-dom"

import getInitialsUtility from "@/bLove/dUtility/aGetInitialsUtility"
import fullRoute from "@/bLove/gRoute/bFullRoute"
// import KisnaLogo from "@/bLove/hAsset/KisnaLogo.jpg";
import userAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bUserAdministration/aUserAPIEndpoints"
import apiResponseHandler from "./extras/aAPIResponseHandler"

import {
  Menu,
  Package2,
  User2,
} from "lucide-react"
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/aConnection/bShadcnConnection/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/aConnection/bShadcnConnection/components/ui/sheet"
import { ModeToggle } from "@/aConnection/bShadcnConnection/components/mode-toggle"
// import { cn } from "@/aConnection/bShadcnConnection/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/aConnection/bShadcnConnection/components/ui/avatar"


const HeaderComponent = () => {
  // Variable
  const navigate = useNavigate();

  // Redux Call
  const ReduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    logoutAPITrigger: userAPIEndpoint.useLazyUserLogoutAPIQuery()[0],
    logoutAPIResponse: userAPIEndpoint.useLazyUserLogoutAPIQuery()[1],
  }
  
  // JSX
  return (
    <React.Fragment>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          {/* <img
            src={KisnaLogo}
            alt={"KisnaLogo"}
            className={cn(
              "h-auto object-fit transition-all hover:scale-105 w-[35px]",
              "aspect-square"
            )}
            onClick={() => navigate(fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute)}
          /> */}
          <Link
            to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aDashboardRoute}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>
          <Link
            to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.aListRoute}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to={fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute}
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">PegaSYS - Admin</span>
              </Link>
              <Link 
                to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aDashboardRoute} 
                className="hover:text-foreground"
              >
                Dashboard
              </Link>
              <Link
                to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.aListRoute}
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.aListRoute}
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.aListRoute}
                className="text-muted-foreground hover:text-foreground"
              >
                User Administration
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Analytics
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-2 md:ml-auto md:gap-2 lg:gap-2">
          {/* <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form> */}
          <div className="ml-auto flex gap-2 flex-1 sm:flex-initial items-center">
            <ModeToggle />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {
                  (ReduxCall.state.receivedObject as any)?.ProfileRetrieve?._id ? (
                    <Link to={fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute} >
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src={"asdsadsad"} />
                          <AvatarFallback>{getInitialsUtility("Apurv", "Chatur")}</AvatarFallback>
                        </Avatar>
                        <div className='hidden sm:block' >
                          <p className="text-sm font-medium leading-none">{"Apurv Chatur"}</p>
                          <p className="text-sm text-muted-foreground">{"apurvchaturofficial@gmail.com"}</p>
                        </div>
                      </div>
                    </Link>
                  ) : (
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <User2 className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                  )
                }
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {
                  (ReduxCall.state.receivedObject as any)?.ProfileRetrieve?._id ? (
                    <React.Fragment>
                      <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.aProfileRetrieveRoute} >
                        <DropdownMenuItem>
                          View Profile
                        </DropdownMenuItem>
                      </Link>
                      <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.bProfileUpdateRoute} >
                        <DropdownMenuItem>
                          Edit Profile
                        </DropdownMenuItem>
                      </Link>
                      <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.cProfilePasswordUpdateRoute} >
                        <DropdownMenuItem>
                          Change Password
                        </DropdownMenuItem>
                      </Link>
                      <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.dProfileDeleteRoute} >
                        <DropdownMenuItem>
                          Delete Profile
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem asChild >
                        <div onClick={() => apiResponseHandler.logoutAPIResponseHandler(APICall.logoutAPITrigger, navigate, ReduxCall)} >
                          Sign Out
                        </div>
                      </DropdownMenuItem>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAuthenticationRoute.aSignInRoute} >
                        <DropdownMenuItem>
                          Sign In
                        </DropdownMenuItem>
                      </Link>
                      <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAuthenticationRoute.bSignUpRoute} >
                        <DropdownMenuItem>
                          Sign Up
                        </DropdownMenuItem>
                      </Link>
                      <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAuthenticationRoute.cForgotPasswordRoute} >
                        <DropdownMenuItem>
                          Forgot Password
                        </DropdownMenuItem>
                      </Link>
                    </React.Fragment>
                  )
                }
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default HeaderComponent;
