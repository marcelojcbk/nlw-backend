import { redis } from '../redis/client'

interface GetSubscriberRankingPositionParams {
  subscriberId: string
}

export async function getSubscriberRankingPosition({
  subscriberId,
}: GetSubscriberRankingPositionParams) {
  const rank = await redis.zrevrank('referral:ranking', subscriberId)
  // zscore pois estamos lidando com SortedSets do Redis
  // que j[a vai]
  if (rank === null) {
    return { position: null }
  }

  return { position: rank + 1 }
}
