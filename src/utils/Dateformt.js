export const dateForm = (date) => {
    return date?.split("T")[0] || "no date";
}