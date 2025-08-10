from weasyprint import HTML


HTML("../index.html").write_pdf("document.pdf")


