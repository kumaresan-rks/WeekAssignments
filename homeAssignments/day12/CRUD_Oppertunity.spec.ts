import { test, expect } from "@playwright/test";
import { Create_SalesForce, delete_SalesForce, get_after_update_SalesForce, get_SalesForce, update_SalesForce } from "./utility_Oppertunity.spec";


test(`verification`, async ({ request }) => {


    await Create_SalesForce(request)
    await get_SalesForce(request)
    await update_SalesForce(request)
    await get_after_update_SalesForce(request)
    await delete_SalesForce(request)


})