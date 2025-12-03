-- Create enums for chat domain
CREATE TYPE "ChatContactStatus" AS ENUM ('online', 'offline', 'busy', 'away');
CREATE TYPE "ChatMessageSenderType" AS ENUM ('USER', 'ASSISTANT');

-- Create ChatContact table
CREATE TABLE "ChatContact" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "displayName" VARCHAR(255) NOT NULL,
    "title" VARCHAR(256),
    "avatarUrl" VARCHAR(512),
    "status" "ChatContactStatus" NOT NULL DEFAULT 'offline',
    "about" TEXT,
    "lastMessagePreview" TEXT,
    "lastMessageAt" TIMESTAMP(0),
    "unreadCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT now(),
    "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT now()
);

-- Create ChatMessage table
CREATE TABLE "ChatMessage" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "contactId" UUID NOT NULL,
    "senderId" VARCHAR(128) NOT NULL,
    "senderType" "ChatMessageSenderType" NOT NULL,
    "content" TEXT NOT NULL,
    "replayMetadata" BOOLEAN NOT NULL DEFAULT FALSE,
    "sentAt" TIMESTAMP(0) NOT NULL DEFAULT now(),
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT now(),
    "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT now(),
    CONSTRAINT "ChatMessage_contactId_fkey" FOREIGN KEY ("contactId")
        REFERENCES "ChatContact"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Helpful index for fetching conversation history
CREATE INDEX "ChatMessage_contactId_sentAt_idx" ON "ChatMessage" ("contactId", "sentAt");


