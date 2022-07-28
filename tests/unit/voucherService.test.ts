import voucherService from "./../../src/services/voucherService";
import { jest } from "@jest/globals";

describe("voucher tests", () => {
  it("create a new voucher", () => {
    const result = jest.spyOn(voucherService, "createVoucher").mockImplementation(() => {return null});
    expect(result).toBe(null);
  })
  it("apply voucher tests", () => {
    const result = jest.spyOn(voucherService, "applyVoucher").mockImplementation(() => {return  });
    
  });
});
