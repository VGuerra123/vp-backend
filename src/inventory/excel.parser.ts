import * as XLSX from "xlsx";

export function parseExcelInventory(buffer: Buffer) {
  const workbook = XLSX.read(buffer, { type: "buffer" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const json = XLSX.utils.sheet_to_json(sheet);

  return json.map((row: any) => ({
    barcode: row.barcode?.toString(),
    quantity: Number(row.quantity ?? 0),
    expiration_date: row.expiration_date,
    location: row.location ?? "Bodega",
  }));
}
