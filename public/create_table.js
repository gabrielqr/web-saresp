class TableCreator {
    createCell(row, content, cellTag = "td") {
        let cell = document.createElement(cellTag);
        cell.textContent = content;
        row.appendChild(cell);
    }

    createTableHeader(table, headers) {
        let tableHead = document.createElement("thead");
        let headRow = document.createElement("tr");

        headers.forEach((header) => {
            this.createCell(headRow, header, "th");
        });

        tableHead.appendChild(headRow);
        table.appendChild(tableHead);
    }

    createTable(tableData) {
        var table = document.createElement("table");

        this.createTableHeader(table, ["Nome", "Ano", "Região", "Série/Ano", "Média"]);

        var tableBody = document.createElement("tbody");
        tableData.forEach((dataRow) => {
            var row = document.createElement("tr");
            var data = dataRow.data();

            this.createCell(row, data["NOMESC"]);
            this.createCell(row, data["ano"]);
            this.createCell(row, data["CodRMet"]);
            this.createCell(row, data["SERIE_ANO"]);
            this.createCell(row, data["medprof"]);

            tableBody.appendChild(row);
        });

        table.appendChild(tableBody);

        return table;
    }
}

export { TableCreator };
