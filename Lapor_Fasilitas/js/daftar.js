
const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");
const reportTable = document.getElementById("reportTable");
const emptyMessage = document.getElementById("emptyMessage");

function filterReports() {
    const searchText = searchInput.value.toLowerCase();
    const selectedStatus = statusFilter.value;

    const rows = reportTable.querySelectorAll("tr");
    let visibleCount = 0;

    rows.forEach(function(row) {
        const text = row.textContent.toLowerCase();
        const status = row.querySelector(".status")
            .textContent.trim().toLowerCase();

        const matchesSearch = text.includes(searchText);
        const matchesStatus =
            selectedStatus === "semua" ||
            status === selectedStatus;

        if (matchesSearch && matchesStatus) {
            row.style.display = "";
            visibleCount++;
        } else {
            row.style.display = "none";
        }
    });

    emptyMessage.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterReports);
statusFilter.addEventListener("change", filterReports);