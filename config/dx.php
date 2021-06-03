<?php

return [
    'broker' => env('DX_BROKER', 'pkc-4yyd6.us-east1.gcp.confluent.cloud:9092'),
    'driver' => env('DX_ENABLE_PUSH', false)
                    ? env('DX_DRIVER', 'kafka')
                    : 'log',
    'dx_username' => env('DX_USERNAME'),
    'dx_password' => env('DX_PASSWORD'),
    'dx_group' => env('DX_GROUP'),
    'push-enable' => env('DX_ENABLE_PUSH', false),
    'warn-disabled' => env('DX_WARN_DISABLED', true),
    'consume' => env('DX_CONSUME', true),
    'topics' => [
        'incoming' => [
            'gene-validity-events' => env('DX_INCOMING_GCI', 'gene_validity_events'),
        ],
        'outgoing' => [
            'precuration-events' => env('DX_OUTGOING_PRECURATION', 'gt-precuration-events'),
            'gt-gci-sync' => env('DX_DUPLEX_GT_GCI_SYNC', 'gt-gci-test'),
        ]
    ],
    // Only used for legacy kafka server. Should no longer be necessary
    'cert-location' => env('DX_CERT', '/etc/pki/tls/certs/kafka.web3demo.signed.crt'),
    'key-location' => env('DX_KEY_LOCATION', '/etc/pki/tls/private/kafka.apache.key'),
    'ca-location' => env('DX_CA_LOCATION', '/etc/pki/ca-trust/extracted/openssl/ca-kafka-cert'),
    'ssl-key-password' => env('KAFKA_KEY_PASSWORD', null),

];