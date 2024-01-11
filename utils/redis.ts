import {createClint} from 'redis';
import config from '../config/env.config'

const redisClient = createClint({
    url:config.REDIS_URL,
})