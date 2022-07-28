import voucherService from "./../../src/services/voucherService";
import voucherRepository from "../../src/repositories/voucherRepository";
import { jest } from "@jest/globals";

jest.mock("../../src/repositories/voucherRepository")

describe("voucher tests", () => {
  it("create a new voucher", async () => {
    jest.spyOn(voucherRepository, "getVoucherByCode").mockImplementation(():any => {});
    jest.spyOn(voucherRepository, "createVoucher").mockImplementation(():any => {});
    await voucherService.createVoucher("AAA", 10);
    expect(voucherRepository.createVoucher).toBeCalled();
  })
  it("apply voucher tests", () => {
    const voucher = {
      code: "AAA",
      discount: 10
    };
    jest.spyOn(voucherRepository, "getVoucherByCode").mockImplementationOnce(() : any => {
      return{
        id:1,
        code: voucher.code,
        discont: voucher.discount,
        used: false
      };
    });
    const promise = voucherService.createVoucher(voucher.code, voucher.discount);
    expect(promise).rejects.toEqual({message: "Voucher already exist.", type: "conflict"});
  });
});
