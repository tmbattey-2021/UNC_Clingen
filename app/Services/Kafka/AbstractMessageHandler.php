<?php
declare(strict_types=1);

namespace App\Services\Kafka;

use App\Contracts\Kafka\MessageHandler;

abstract class AbstractMessageHandler implements MessageHandler
{
    /**
     * @var MessageHandler
     */
    private $nextHandler;

    public function setNext(MessageHandler $handler): MessageHandler
    {
        $this->nextHandler = $handler;
        
        return $handler;
    }

    public function handle(\RdKafka\Message $message)
    {
        if ($this->nextHandler) {
            return $this->nextHandler->handle($message);
        }
        return;
    }
}
