import { redis } from '../redis/client'

interface GetSubscriberInvitesCountParams {
  subscriberId: string
}

export async function getSubscriberInvitesCount({
  subscriberId,
}: GetSubscriberInvitesCountParams) {
  const count = await redis.zscore('referral:ranking', subscriberId)
  // zscore pois estamos lidando com SortedSets do Redis
  // que j[a vai]

  return { count: count ? Number.parseInt(count) : 0 }
}
