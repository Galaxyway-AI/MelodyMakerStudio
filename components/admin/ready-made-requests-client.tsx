"use client"

import { useState } from "react"
import { ReadyMadeRequest } from "@/lib/db/firestore-schema"
import { updateReadyMadeRequestStatus } from "@/lib/actions/ready-made-songs"
import { format } from "date-fns"
import { toast } from "sonner"
import { Loader2, Mail, Phone, Calendar, User, Music, CheckCircle2, Clock, Trash2, Archive } from "lucide-react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

interface ReadyMadeRequestsClientProps {
    initialRequests: ReadyMadeRequest[]
}

export function ReadyMadeRequestsClient({ initialRequests }: ReadyMadeRequestsClientProps) {
    const [requests, setRequests] = useState<ReadyMadeRequest[]>(initialRequests)
    const [isLoading, setIsLoading] = useState<string | null>(null)
    const [selectedRequest, setSelectedRequest] = useState<ReadyMadeRequest | null>(null)

    const handleStatusChange = async (id: string, newStatus: ReadyMadeRequest["status"]) => {
        setIsLoading(id)
        const result = await updateReadyMadeRequestStatus(id, newStatus)
        if (result.success) {
            setRequests(requests.map(req => req.id === id ? { ...req, status: newStatus } : req))
            toast.success("Status updated")
        } else {
            toast.error("Failed to update status")
        }
        setIsLoading(null)
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "new": return "bg-blue-500/20 text-blue-400 border-blue-500/50"
            case "contacted": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"
            case "reviewed": return "bg-purple-500/20 text-purple-400 border-purple-500/50"
            case "archived": return "bg-gray-500/20 text-gray-400 border-gray-500/50"
            default: return "bg-gray-500/20 text-gray-400"
        }
    }

    return (
        <div className="space-y-6">
            <div className="rounded-xl border border-white/10 bg-card/50 overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow className="border-white/10 hover:bg-transparent">
                            <TableHead className="text-gray-300">Date</TableHead>
                            <TableHead className="text-gray-300">Name / Role</TableHead>
                            <TableHead className="text-gray-300">Contact</TableHead>
                            <TableHead className="text-gray-300">Budget / Timeline</TableHead>
                            <TableHead className="text-gray-300">Song Link</TableHead>
                            <TableHead className="text-gray-300">Status</TableHead>
                            <TableHead className="text-right text-gray-300">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {requests.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} className="h-24 text-center text-gray-400">
                                    No requests found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            requests.map((request) => (
                                <TableRow key={request.id} className="border-white/5 hover:bg-white/5 transition-colors">
                                    <TableCell className="font-medium text-gray-300 whitespace-nowrap">
                                        {format(request.createdAt, "MMM d, yyyy")}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-white">{request.fullName}</span>
                                            {request.artistName && <span className="text-xs text-purple-400">{request.artistName}</span>}
                                            <span className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                                                <User className="h-3 w-3" /> {request.userRole}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col gap-1">
                                            <a href={`mailto:${request.email}`} className="text-sm text-gray-300 hover:text-primary flex items-center gap-1">
                                                <Mail className="h-3 w-3" /> {request.email}
                                            </a>
                                            {request.phoneNumber && (
                                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                                    <Phone className="h-3 w-3" /> {request.phoneNumber}
                                                </span>
                                            )}
                                            <span className="text-xs text-gray-500">{request.country}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col gap-1">
                                            <Badge variant="outline" className="w-fit border-green-500/30 text-green-400 text-[10px]">{request.budgetRange}</Badge>
                                            <span className="text-xs text-gray-400 flex items-center gap-1">
                                                <Clock className="h-3 w-3" /> {request.timeline}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="max-w-[200px]">
                                        <a href={request.songLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm truncate block" title={request.songLink}>
                                            View Song Link
                                        </a>
                                        <p className="text-xs text-gray-400 truncate mt-1" title={request.usageType.join(", ")}>
                                            {request.usageType.join(", ")}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <Select
                                            value={request.status}
                                            onValueChange={(value) => handleStatusChange(request.id, value as any)}
                                            disabled={isLoading === request.id}
                                        >
                                            <SelectTrigger className={`h-8 w-[110px] text-xs border-0 ${getStatusColor(request.status)}`}>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="new">New</SelectItem>
                                                <SelectItem value="reviewed">Reviewed</SelectItem>
                                                <SelectItem value="contacted">Contacted</SelectItem>
                                                <SelectItem value="archived">Archived</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="ghost" size="sm" onClick={() => setSelectedRequest(request)}>
                                                    Details
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="bg-card/95 backdrop-blur-xl border-white/10 max-w-2xl">
                                                <DialogHeader>
                                                    <DialogTitle>Request Details</DialogTitle>
                                                    <DialogDescription>Full details of the request.</DialogDescription>
                                                </DialogHeader>
                                                <div className="grid grid-cols-2 gap-6 mt-4">
                                                    <div className="space-y-4">
                                                        <div>
                                                            <h4 className="text-sm font-semibold text-gray-400 mb-1">Contact Info</h4>
                                                            <p className="text-white">{request.fullName}</p>
                                                            <p className="text-gray-300 text-sm">{request.email}</p>
                                                            <p className="text-gray-300 text-sm">{request.phoneNumber}</p>
                                                            <p className="text-gray-300 text-sm">{request.country}</p>
                                                        </div>
                                                        <div>
                                                            <h4 className="text-sm font-semibold text-gray-400 mb-1">Role & Artist Name</h4>
                                                            <p className="text-white">{request.userRole}</p>
                                                            {request.artistName && <p className="text-gray-300 text-sm">{request.artistName}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="space-y-4">
                                                        <div>
                                                            <h4 className="text-sm font-semibold text-gray-400 mb-1">Project Specs</h4>
                                                            <p className="text-white text-sm"><span className="text-gray-400">Budget:</span> {request.budgetRange}</p>
                                                            <p className="text-white text-sm"><span className="text-gray-400">Timeline:</span> {request.timeline}</p>
                                                            <div className="mt-2">
                                                                <span className="text-gray-400 text-sm block mb-1">Usage:</span>
                                                                <div className="flex flex-wrap gap-1">
                                                                    {request.usageType.map(t => (
                                                                        <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <h4 className="text-sm font-semibold text-gray-400 mb-1">Song Link</h4>
                                                        <a href={request.songLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">
                                                            {request.songLink}
                                                        </a>
                                                    </div>
                                                    <div className="col-span-2 bg-white/5 p-4 rounded-lg">
                                                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Additional Details</h4>
                                                        <p className="text-gray-200 text-sm whitespace-pre-wrap">{request.details || "No additional details provided."}</p>
                                                    </div>
                                                    <div className="col-span-2 flex gap-4 text-xs text-gray-500">
                                                        <span className="flex items-center gap-1">
                                                            {request.agreedToTerms ? <CheckCircle2 className="h-3 w-3 text-green-500" /> : <div className="h-3 w-3 border rounded-full" />}
                                                            Agreed to Terms
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            {request.consentedToContact ? <CheckCircle2 className="h-3 w-3 text-green-500" /> : <div className="h-3 w-3 border rounded-full" />}
                                                            Consented to Contact
                                                        </span>
                                                    </div>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
