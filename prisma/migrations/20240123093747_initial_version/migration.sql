-- CreateEnum
CREATE TYPE "EnumCommentStatus" AS ENUM ('Done', 'Todo', 'Doing');

-- CreateEnum
CREATE TYPE "EnumActionEventAction" AS ENUM ('Download', 'Upload', 'Edit', 'Delete', 'AddRole', 'RemoveRole', 'Duplicate', 'Comment', 'Share', 'Assign', 'Star', 'Public', 'Private');

-- CreateTable
CREATE TABLE "Team" (
    "avatarUrl" TEXT,
    "canComment" BOOLEAN,
    "canShare" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "defaultUserRole" TEXT,
    "id" TEXT NOT NULL,
    "inviteRequired" BOOLEAN,
    "name" TEXT,
    "subDomain" TEXT,
    "theme" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workspace" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "domain" TEXT,
    "id" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT,

    CONSTRAINT "Workspace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "address" TEXT,
    "age" INTEGER,
    "avatarUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fullName" TEXT,
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN,
    "isAdmin" BOOLEAN NOT NULL,
    "isViewer" BOOLEAN,
    "language" TEXT,
    "lastActiveAt" TIMESTAMP(3),
    "lastName" TEXT,
    "password" TEXT NOT NULL,
    "roles" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "authorId" TEXT NOT NULL,
    "collectionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "emoji" TEXT,
    "id" TEXT NOT NULL,
    "isFullWidth" BOOLEAN,
    "isPublic" BOOLEAN NOT NULL,
    "publishedAt" TIMESTAMP(3),
    "revision" INTEGER,
    "templateId" TEXT,
    "text" TEXT,
    "title" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "authorId" TEXT NOT NULL,
    "canShare" BOOLEAN,
    "childCollectionIds" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "downloadPermission" JSONB NOT NULL,
    "icon" TEXT,
    "id" TEXT NOT NULL,
    "index" TEXT,
    "isSaving" BOOLEAN,
    "name" TEXT NOT NULL,
    "parentCollectionId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT,
    "workspaceId" TEXT,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Member" (
    "collectionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "role" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Archived" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Archived_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "documentId" TEXT,
    "id" TEXT NOT NULL,
    "parentCommentId" TEXT,
    "status" "EnumCommentStatus",
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActionEvent" (
    "action" "EnumActionEventAction" NOT NULL,
    "actor" TEXT,
    "assignee" TEXT,
    "assigner" TEXT,
    "collectionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "documentId" TEXT,
    "id" TEXT NOT NULL,

    CONSTRAINT "ActionEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Position" (
    "col" INTEGER NOT NULL,
    "commentsId" TEXT,
    "content" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "line" INTEGER NOT NULL,
    "toCol" TEXT,
    "toLine" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TeamToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TeamToWorkspace" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_UserToWorkspace" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_childDocuments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DocumentToMember" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ArchivedToCollection" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ArchivedToDocument" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_authorId_key" ON "Collection"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_parentCollectionId_key" ON "Collection"("parentCollectionId");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_url_key" ON "Collection"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_workspaceId_key" ON "Collection"("workspaceId");

-- CreateIndex
CREATE UNIQUE INDEX "Archived_userId_key" ON "Archived"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Comment_userId_key" ON "Comment"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Position_commentsId_key" ON "Position"("commentsId");

-- CreateIndex
CREATE UNIQUE INDEX "_TeamToUser_AB_unique" ON "_TeamToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TeamToUser_B_index" ON "_TeamToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TeamToWorkspace_AB_unique" ON "_TeamToWorkspace"("A", "B");

-- CreateIndex
CREATE INDEX "_TeamToWorkspace_B_index" ON "_TeamToWorkspace"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserToWorkspace_AB_unique" ON "_UserToWorkspace"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToWorkspace_B_index" ON "_UserToWorkspace"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_childDocuments_AB_unique" ON "_childDocuments"("A", "B");

-- CreateIndex
CREATE INDEX "_childDocuments_B_index" ON "_childDocuments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DocumentToMember_AB_unique" ON "_DocumentToMember"("A", "B");

-- CreateIndex
CREATE INDEX "_DocumentToMember_B_index" ON "_DocumentToMember"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ArchivedToCollection_AB_unique" ON "_ArchivedToCollection"("A", "B");

-- CreateIndex
CREATE INDEX "_ArchivedToCollection_B_index" ON "_ArchivedToCollection"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ArchivedToDocument_AB_unique" ON "_ArchivedToDocument"("A", "B");

-- CreateIndex
CREATE INDEX "_ArchivedToDocument_B_index" ON "_ArchivedToDocument"("B");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_parentCommentId_fkey" FOREIGN KEY ("parentCommentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionEvent" ADD CONSTRAINT "ActionEvent_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionEvent" ADD CONSTRAINT "ActionEvent_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position" ADD CONSTRAINT "Position_commentsId_fkey" FOREIGN KEY ("commentsId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeamToUser" ADD CONSTRAINT "_TeamToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeamToUser" ADD CONSTRAINT "_TeamToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeamToWorkspace" ADD CONSTRAINT "_TeamToWorkspace_A_fkey" FOREIGN KEY ("A") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeamToWorkspace" ADD CONSTRAINT "_TeamToWorkspace_B_fkey" FOREIGN KEY ("B") REFERENCES "Workspace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToWorkspace" ADD CONSTRAINT "_UserToWorkspace_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToWorkspace" ADD CONSTRAINT "_UserToWorkspace_B_fkey" FOREIGN KEY ("B") REFERENCES "Workspace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_childDocuments" ADD CONSTRAINT "_childDocuments_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_childDocuments" ADD CONSTRAINT "_childDocuments_B_fkey" FOREIGN KEY ("B") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DocumentToMember" ADD CONSTRAINT "_DocumentToMember_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DocumentToMember" ADD CONSTRAINT "_DocumentToMember_B_fkey" FOREIGN KEY ("B") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArchivedToCollection" ADD CONSTRAINT "_ArchivedToCollection_A_fkey" FOREIGN KEY ("A") REFERENCES "Archived"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArchivedToCollection" ADD CONSTRAINT "_ArchivedToCollection_B_fkey" FOREIGN KEY ("B") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArchivedToDocument" ADD CONSTRAINT "_ArchivedToDocument_A_fkey" FOREIGN KEY ("A") REFERENCES "Archived"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArchivedToDocument" ADD CONSTRAINT "_ArchivedToDocument_B_fkey" FOREIGN KEY ("B") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;
