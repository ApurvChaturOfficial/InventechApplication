import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import baseAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/aBaseSetupAPI/cBaseAPIEndpoints";
import baseOneToOneAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/aBaseSetupAPI/dBaseOneToOneAPIEndpoints";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import { RootState } from "@/aConnection/dReduxConnection";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import BaseOneToOneUpdateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/aBaseSetupComponent/dBaseOneToOneComponent/dUpdateComponent";
import data from "./extras/bData";
import { formSchema } from "./extras/cType";


const BaseOneToOneUpdatePage = () => {
  // Variables
  const { id } = useParams();

  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    retrieveAPIResponse: baseOneToOneAPIEndpoint.useBaseOneToOneRetrievePIQuery({ params: { _id: id } }),
    updateAPITrigger: baseOneToOneAPIEndpoint.useBaseOneToOneUpdateAPIMutation()[0],
    updateAPIResponse: baseOneToOneAPIEndpoint.useBaseOneToOneUpdateAPIMutation()[1],

    // Relationship... Muaaah...
    baseListAPIResponse: baseAPIEndpoint.useBaseListAPIQuery(null),

  }  
  
  // JSX
  return (
    <React.Fragment>
      {/* BaseOneToOneUpdatePage */}
      <BaseOneToOneUpdateComponent 
        ReduxCall={ReduxCall}
        APICall={{
          retrieveAPIResponse: APICall.retrieveAPIResponse,
          updateAPITrigger: APICall.updateAPITrigger,
          updateAPIResponse: APICall.updateAPIResponse,
        }}
        extras={{
          apiResponseHandler: {
            updateAPIResponseHandler: apiResponseHandler.updateAPIResponseHandler
          },
          data: data(APICall),
          formSchema: formSchema,
          formDefaultValue: {
            aTitle: "",
            aSubtitle: "",
            aDescription: "",
            aDetail: "",
            aStatus: "",
            aSlug: "",
      
            cBase: "",
          },
          previousValue: (form: any) => (
            form.setValue("aTitle", APICall.retrieveAPIResponse.data.retrieve?.aTitle),
            form.setValue("aSubtitle", APICall.retrieveAPIResponse.data.retrieve?.aSubtitle),
            form.setValue("aDescription", APICall.retrieveAPIResponse.data.retrieve?.aDescription),
            form.setValue("aDetail", APICall.retrieveAPIResponse.data.retrieve?.aDetail),
            form.setValue("aStatus", APICall.retrieveAPIResponse.data.retrieve?.aStatus ? "active" : "inactive"),
            form.setValue("aSlug", APICall.retrieveAPIResponse.data.retrieve?.aSlug),
    
            form.setValue("cBase", APICall.retrieveAPIResponse.data.retrieve?.cBase?._id)
          )
        }}
        params={{id: id}}               
      />
    </React.Fragment>
  )
}

export default BaseOneToOneUpdatePage;