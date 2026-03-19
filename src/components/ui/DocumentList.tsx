import { FileText, Download } from "lucide-react";
import { PillButton } from "./PillButton";

interface DocumentItem {
  id: string;
  title: string;
  date?: string;
  fileUrl: string;
  fileSize?: string;
}

interface DocumentListProps {
  documents: DocumentItem[];
}

export function DocumentList({ documents }: DocumentListProps) {
  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <div
          key={doc.id}
          className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow gap-4"
        >
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-secondary/30 rounded-full text-brand">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-brand text-lg">{doc.title}</h4>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1 font-medium">
                {doc.date && <span>{doc.date}</span>}
                {doc.date && doc.fileSize && <span>•</span>}
                {doc.fileSize && <span>{doc.fileSize}</span>}
              </div>
            </div>
          </div>
          <a
            href={doc.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand text-white rounded-full hover:bg-brand/90 transition-colors font-semibold text-sm"
            aria-label={`Download ${doc.title}`}
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </a>
        </div>
      ))}
    </div>
  );
}
